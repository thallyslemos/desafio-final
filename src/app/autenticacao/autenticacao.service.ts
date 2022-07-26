import { environment } from './../../environments/environment';
import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs'; //e o pipe??

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpCliente: HttpClient, private usuarioService: UsuarioService ) { }

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpCliente.post(`${API}/user/login`, {
      userName: usuario,
      password: senha,
    },
    { observe: 'response'}).pipe(
      tap((res)=> {
        const authToken = res.headers.get('x-access-token') ?? ''; // entender isso aqui
        this.usuarioService.salvaToken(authToken);
      })
    )
  }
}
