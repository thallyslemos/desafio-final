import { Veiculo, Veiculos } from './veiculos';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(private http: HttpClient) { }

  getVeiculos(id: number) { // Busca veiculo por id na api
    console.log(this.http.get<Veiculo>(`${API}/vehicle/${id}`))
    return this.http.get<Veiculo>(`${API}/vehicle/${id}`)
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
