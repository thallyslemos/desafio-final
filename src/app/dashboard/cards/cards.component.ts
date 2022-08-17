import { Component, OnInit } from '@angular/core';
import { Veiculo, Veiculos } from './veiculos';
import { VeiculosService } from './veiculos.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
// Considerar a utilização de Observable para receber os dados da api
export class CardsComponent implements OnInit {
  id: number = 1 // Recebe o id do veículo no template após a mudança no input Select
  veiculo$!:Veiculo  // Recebe um resultado da requisição ao backend que será um veiculo definido pelo ID
  veiculosArray$!: Veiculos // Recebe *** um array de veiculos
  imgVeiculo!: string // Recebe o caminho da imagem do veículo selecionado
  constructor(private veiculosServices: VeiculosService) {
   }

  ngOnInit() {
    this.retornaVeiculo() //Faz a primeira requisição ao backend ao inicializar o componente para preencher o conteudo dos cards
    this.veiculosServices.getVeiculosArray().subscribe((retornoApi)=>{this.veiculosArray$ = retornoApi.vehicles})
    // Faz uma unica busca no array inteiro de veiculos para preencher o conteudo do select no template
  }
  retornaVeiculo() { // Consome o serviço de busca de veículos na api e armazena os dados nas variaveis do componente
    this.veiculosServices.getVeiculoById(this.id).subscribe({ next: (data)=> { this.veiculo$ = data},
    error: (error)=> {console.log(error)}}),
    this.imgVeiculo = this.veiculosServices.getImage(this.id, this.imgVeiculo)
  }

}
