import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Table, TabelaAPI } from './table';
import { map, tap } from 'rxjs';
const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
// Table de vehicleData
export class TableService {

  constructor(private http: HttpClient) { }

  // getVehicledataById(codigoVn: string) {//Busca veiculo por id associado ao código vn no template
  //   return this.http.get<Table>(`${API}/vehicledata/${codigoVn}`)
  // }
  // getVehicleDataApi(){
  //   return this.http.get<TabelaAPI>(`${API}/vehicleData`)
    // .pipe(
    //   tap((valor)=> console.log(valor)),
    //   map((data)=> data.vehicledata.sort((veiculoA, veiculoB) => this.ordenaPorCodigo(veiculoA, veiculoB))))
  // }
  getVeiculos(valor?: string){
    const params = valor ? new HttpParams().append('valor', valor) : undefined;
    return this.http.get<TabelaAPI>(`${API}/vehicleData`, { params }).pipe(
      tap((valor)=>console.log(valor.vehicleData.length)),
      map((veiculos)=>
      veiculos.vehicleData.sort((veiculoA, veiculoB)=> this.ordenaPorCodigo(veiculoA, veiculoB)))
    )
  }
  private ordenaPorCodigo(veiculoA: Table, veiculoB: Table) {
    if(veiculoA.id > veiculoB.id){
      return 1
    }
    if(veiculoA.id < veiculoB.id){
      return -1
    }
    return 0
  }
}
