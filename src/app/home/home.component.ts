import { UsuarioService } from './../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Usuario } from '../autenticacao/usuario/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  protected user$: Observable<string | undefined> = this.usuarioService.retornaUsuario().pipe(
    map((user)=> { return user.name})
  );

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

}
