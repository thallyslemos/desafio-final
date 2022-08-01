import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Veiculo } from './veiculos';
import { VeiculosService } from './veiculos.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  id: number = 1 // Recebe o id do veículo no template após a mudança no input Select
  veiculo$!:Veiculo  // Recebe um resultado da requisição ao backend que será um dos veiculos
  imgVeiculo: string = 'assets/img/ranger.png' // Recebe o caminho da imagem do veículo selecionado
  constructor(private veiculosServices: VeiculosService) {
   }

  ngOnInit(): void {
 this.retornaVeiculo() //Faz a primeira requisição ao backend ao inicializar o componente
  }
  retornaVeiculo() { // Consome o serviço de busca de veículos
    return this.veiculosServices.getVeiculos(this.id).subscribe((data)=> { this.veiculo$ = data},
    (error)=> {console.log(error)}),
    this.imgVeiculo = this.veiculosServices.getImage(this.id, this.imgVeiculo)
  }

}
