import { tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Veiculo } from './veiculos';
import { VeiculosService } from './veiculos.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  id: number = 1 // Recebe o id do veículo no template após a mudança no input Select
  dadosVeiculo!:Veiculo  // Recebe um resultado da requisição ao backend que será um veiculo definido pelo ID
  veiculosArray$ = this.veiculosService.getVeiculosArray() // Recebe um observable de array de veiculos
  imgVeiculo!: string // Recebe o caminho da imagem do veículo selecionado
  constructor(private veiculosService: VeiculosService) {
  }
  ngOnInit() {
    this.retornaVeiculo() //Faz a primeira requisição ao backend ao inicializar o componente para preencher o conteudo dos cards
  }
  retornaVeiculo() { // Consome o serviço de busca de veículos na api e armazena os dados nas variaveis do componente
    this.imgVeiculo = this.veiculosService.getImage(this.id, this.imgVeiculo);
    return this.veiculosService.getVeiculoById(this.id).subscribe({ next: (data)=> { this.dadosVeiculo = data},
    error: (error)=> {console.log(error)}})
  }
}
