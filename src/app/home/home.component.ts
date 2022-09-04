import { UsuarioService } from './../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user$: Observable<string | undefined> = this.usuarioService.retornaUsuario().pipe(
    map((user)=> { return user.name})
  );

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

}
