import { tap, pluck, map } from 'rxjs';
import { Veiculo, Veiculos, VeiculosAPI } from './veiculos';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(private http: HttpClient) { }

  getVeiculoById(id: number) { // Busca veiculo por id na api
    return this.http.get<Veiculo>(`${API}/vehicle/${id}`)
  }
  getVeiculosArray() { // Busca o array de veiculos na API
    return this.http.get<VeiculosAPI>(`${API}/vehicle`).pipe(
      tap((valor)=>console.log(valor)),
      map((valor)=>valor.vehicles)
    )
  }

  getImage(id: number, img: string) { // Busca imagem por id
    if(id == 1) {
      img = 'assets/img/ranger.png'
    } if(id == 2){
      img ='assets/img/mustang.png'
    } if(id == 3) {
      img = 'assets/img/territory.png'
    } if(id == 4) {
      img = 'assets/img/broncoSport.png'
    }
    return img
  }
}
