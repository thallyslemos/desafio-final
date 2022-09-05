import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { vehicleData, vehicleDataAPI } from './vehicleData';
import { map, tap } from 'rxjs';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})

export class VehicleDataService {

  constructor(private http: HttpClient) { }

  getVeiculos(valor?: string){
    const params = valor ? new HttpParams().append('valor', valor) : undefined;
    return this.http.get<vehicleDataAPI>(`${API}/vehicleData`, { params }).pipe(
      map((veiculos)=>
      veiculos.vehicleData.sort((veiculoA, veiculoB)=> this.ordenaPorId(veiculoA, veiculoB)))
    );
  }

  private ordenaPorId(veiculoA: vehicleData, veiculoB: vehicleData) {
    if(veiculoA.id > veiculoB.id){
      return 1;
    }
    if(veiculoA.id < veiculoB.id){
      return -1;
    }
    return 0;
  }
}
