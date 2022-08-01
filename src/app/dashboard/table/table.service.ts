import { Veiculo } from './../cards/veiculos';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TabelaAPI, Table, Tables } from './table';
import { map, tap } from 'rxjs/operators'
const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  getTable(codigoVn: string) {//Busca veiculo por id associado ao código vn no template
    return this.http.get<Table>(`${API}/vehicledata/${codigoVn}`)
  }
}
