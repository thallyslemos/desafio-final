import { TableService } from './table.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Table } from './table';

const API = environment.apiURL
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  codigoVn: string = "1" //a tabela inicia com o veiculo de ID 1
  dados!: Table //dados de vehicle data que serão exibidos na tabela

  constructor(private table: TableService) { }

  ngOnInit() {// a rimeira busca será feita ao carregar a página para a tabela n iniciar vazia
  this.retornaDados()
  }

  retornaDados() { //método será chamado ao carregar a página e ao mudar o campo de seleção da tabela
    return this.table.getTable(this.codigoVn).subscribe((data)=>{this.dados = data},
    (error)=>{console.log(error)})

  }

}
