import { debounceTime, distinctUntilChanged, filter, merge, Observable, switchMap, tap } from 'rxjs';
import { TableService } from './table.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Table, Tables } from './table';
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
  vehicleDataArray!: Tables

  vehicleDataInput = new FormControl();
  veiculosArray$ = this.table.getVeiculos().pipe(
    tap(()=>{console.log('Fluxo Inicial')})
  )
  filtroPorInput$ = this.vehicleDataInput.valueChanges.pipe(
    debounceTime(100),
    tap(()=>{console.log('Fluxo Filtro')}),
    tap(console.log),
    filter((valorDigitado)=> valorDigitado.length == 20 || !valorDigitado.length),
    distinctUntilChanged(),
    switchMap((valorDigitado)=> this.table.getVeiculos(valorDigitado)),
    tap(console.log)
  )
  veiculos$ = merge(this.filtroPorInput$, this.veiculosArray$)

  constructor(private table: TableService) { }

  ngOnInit() {// a rimeira busca será feita ao carregar a página para a tabela n iniciar vazia
  // this.results$ = this.vehicleDataInput.valueChanges.pipe(tap(value => console.log(value)))
  this.retornaDados()
  // this.table.getVehicleDataApi().subscribe((retornoApi)=>{this.vehicleDataArray = retornoApi.vehicledata })
  }

  retornaDados() { //método será chamado ao carregar a página e ao mudar o campo de seleção da tabela
    return this.table.getVeiculos().subscribe({next:(data)=>{this.dados = data},
    error:(error)=>{console.log(error)}})
  }
  // onSearch() {
  //   console.log(this.vehicleDataInput);
  //   return this.filtroPorInput$, this.veiculos$
  //   console.log(this.input)
  // }
}
