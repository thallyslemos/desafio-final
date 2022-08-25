import { Veiculo } from './../veiculos';
import { Component, ElementRef, Input, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, registerables, } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  myChart!: Chart<any, any[], unknown>;

  // @Input() veiculo!:any
  @Input() dados!:any
  @Input() rotulos!:any

  // coneted = this.veiculo.cnected
  // unConected = this.veiculo.cnected

  @ViewChild( 'meuCanvas', { static: true}) elemnento!: ElementRef

  dado = [2,5]
  title = 'ng2-charts-demo';
  doughnutChartLabels: string[]= [];
  doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets']= [
    { data: [], label: 'Series B', }
    // { data: [ 250, 130 ], label: 'Series C' }
  ];
  doughnutChartOptions: ChartConfiguration<'doughnut'>['options']= {
    responsive: true,
    cutout: '70%',
    datasets: { },

  };
  // pluginsChart: ChartConfiguration = {
  //   plugins: [ChartDataLabels],
  //   type: 'doughnut',
  //   data:[]
  // }

  // Doughnut

  ngOnInit(){
    console.log(this.dados)
    console.log(this.dado)
  }

  // constructor(){
  //   Chart.register(...registerables);
  // }

   ngOnChanges(changes: SimpleChange){
    this.doughnutChartDatasets = [{
      data: [(this.dados[0] - this.dados[1]), this.dados[1]],
      backgroundColor: ['#010c2a', '#1351d8'],
      hoverBackgroundColor:[ '#01025c', '#1300fa'],
      hoverBorderColor: ['#fff'],
      hoverOffset: 4,

      }]
    this.doughnutChartLabels = this.rotulos


  //   this.retornaGrafico(this.veiculo)
   }

  //  retornaGrafico(veiculo: any){
  //   this.doughnutChartLabels = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  // this.doughnutChartDatasets = [
  //     { data: [this.dados[0], this.dados[1] ], label: 'Series B',  },

  //   ];

  // this.doughnutChartOptions = {
  //   responsive: false,
  //   cutout: 10,
  // };
  //   let total = veiculo.conected
  //   if(typeof this.myChart == 'object'){
  //     this.myChart.destroy()  // destruirá o objeto instanciado na variavel para instanciar um novo
  //   }
  //   this.myChart = new Chart(this.elemnento.nativeElement, {
  //     type: 'doughnut',
  //     data:
  //     {
  //       labels: ['Conectados'],
  //       datasets: [{
  //         data: [(veiculo.volumetotal - veiculo.connected), (veiculo.connected)],
      //     backgroundColor: [
      //       // '#010c2a',
      //       '#01025c',
      //       '#1300fa'
      //     ],
      //     hoverOffset: 4,
      //   }]
      // },
      // options: {
      //   plugins: {
      //     tooltip: {
      //     backgroundColor: '#ffffff',
      //     borderColor: 'hsl(209, 100%, 50%)',
      //     borderWidth: 1,
      //     titleColor: 'black',
      //     usePointStyle: true,
      //     displayColors: true,
      //     callbacks: {
      //       labelTextColor: ()=> {
      //           return '#010c2a'
      //       },
      //     }
      //     },
      //     datalabels: {
      //       formatter: (value, context) => {
      //         console.log(value)
      //         console.log(context)
      //         let percent = (value/veiculo.volumetotal)*100
      //         return percent.toFixed(1) + '%';
      //       },
      //       color: '#ffffff'
      //     }
      //   }
      // },
      // plugins: [ChartDataLabels]
  //  });
  //  }
}
