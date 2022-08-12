import { Veiculo } from './../veiculos';
import { Component, ElementRef, Input, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { Chart, registerables  } from 'chart.js'

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  myChart!: Chart<any>;

  @Input() veiculo!:any

  @ViewChild( 'meuCanvas', { static: true}) elemnento!: ElementRef

  constructor(){
    Chart.register(...registerables);
  }

  ngOnInit(){
    this.retornaGrafico(this.veiculo)
  }
  ngOnChanges(changes: SimpleChange){
    this.limpaGrafico()
    this.retornaGrafico(this.veiculo)
  }

  retornaGrafico(veiculo: Veiculo){
    this.myChart = new Chart(this.elemnento.nativeElement, {
      type: 'doughnut',
      data: {
          labels: ['Total de Vendas', 'Conectados', 'Uodate Software'],
          datasets: [{
              label: '# of Votes',
              data: [veiculo.volumetotal, veiculo.connected, veiculo.softwareUpdates],
              backgroundColor: [
                  '#010c2a',
                  '#01025c',
                  '#1300fa'
              ]
          }]
      },
      options: {
      }
   });

  }
  limpaGrafico(){
    this.myChart.destroy()
  }


}
