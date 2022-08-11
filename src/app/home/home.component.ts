import { UsuarioService } from './../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user$ = this.usuarioService.retornaUsuario()
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

}
