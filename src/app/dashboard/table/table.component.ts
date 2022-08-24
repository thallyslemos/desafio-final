import { debounceTime, distinctUntilChanged, filter, merge, Observable, switchMap, tap, map } from 'rxjs';
import { VehicleDataService } from './vehicleData.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { vehicleDataArray } from './vehicleData';
import { FormControl } from '@angular/forms';


const API = environment.apiURL
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // input = ""
  dados!: any //dados de vehicle data que serão exibidos na tabela
  vehicleDataArray!: vehicleDataArray

  vehicleDataInput = new FormControl();
  veiculosArray$ = this.vehicleData.getVeiculos().pipe(
    tap(()=>{console.log('Fluxo Inicial')})
  )
  filtroPorInput$ = this.vehicleDataInput.valueChanges.pipe(
    debounceTime(300),
    tap(()=>{console.log('Fluxo Filtro')}),
    tap(console.log),
    filter((valorDigitado)=> valorDigitado.length >= 19 || !valorDigitado.length),
    distinctUntilChanged(),
    switchMap((valorDigitado)=> this.vehicleData.getVeiculos(valorDigitado)),
    tap(console.log)
  )
  veiculos$ = merge(this.filtroPorInput$, this.veiculosArray$)

  constructor(private vehicleData: VehicleDataService) { }

  ngOnInit() {// a rimeira busca será feita ao carregar a página para a tabela n iniciar vazia
  // this.results$ = this.vehicleDataInput.valueChanges.pipe(tap(value => console.log(value)))
  this.retornaDados()
  // this.vehicleData.getVehicleDataApi().subscribe((retornoApi)=>{this.vehicleDataArray = retornoApi.vehicledata })
  }

  retornaDados() { //método será chamado ao carregar a página e ao mudar o campo de seleção da tabela
    return this.vehicleData.getVeiculos().subscribe({next:(data)=>{this.dados = data},
    error:(error)=>{console.log(error)}})
  }
  // onSearch() {
  //   console.log(this.vehicleDataInput);
  //   return this.filtroPorInput$, this.veiculos$
  //   console.log(this.input)
  // }
}
