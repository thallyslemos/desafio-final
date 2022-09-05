import { debounceTime, distinctUntilChanged, filter, merge, switchMap, tap, map } from 'rxjs';
import { VehicleDataService } from './vehicleData.service';
import { environment } from './../../../environments/environment';
import { Component, } from '@angular/core';
import { vehicleDataArray } from './vehicleData';
import { FormControl } from '@angular/forms';

const API = environment.apiURL
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  dados!: vehicleDataArray //dados de vehicleData que serão exibidos na tabela

  vehicleDataInput = new FormControl();
  veiculosArray$ = this.vehicleData.getVeiculos();
  filtroPorInput$ = this.vehicleDataInput.valueChanges.pipe(
    debounceTime(300),
    tap(console.log),
    filter((valorDigitado)=> valorDigitado.length >= 17 || !valorDigitado.length),
    distinctUntilChanged(),
    switchMap((valorDigitado)=> this.vehicleData.getVeiculos(valorDigitado)),
    tap(console.log)
  );

  veiculos$ = merge(this.filtroPorInput$, this.veiculosArray$);

  constructor(private vehicleData: VehicleDataService) { }

  //método será chamado ao preencher o input com a quantidade de caracteres definidos no filtroPorInput
  retornaDados() {
    return this.vehicleData.getVeiculos().subscribe({next:(data)=>{this.dados = data},
    error:(error)=>{console.log(error)}});
  }
}
