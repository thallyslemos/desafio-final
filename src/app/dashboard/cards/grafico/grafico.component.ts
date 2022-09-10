import { Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { ChartConfiguration } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  @Input() dados!:any
  @Input() rotulos!:any

  chartLabels: string[]= [];
  chartDatasets: ChartConfiguration<'doughnut'>['data']['datasets']= [
    { data: [], label: 'DashboardChart', }
  ];

  chartPlugins = [ ChartDataLabels ];

  chartOptions: ChartConfiguration<'doughnut'>['options']= {
    responsive: true,
    cutout: '30%',
    plugins: {
      datalabels: {

        formatter: (value, ctx) => {
          let total = 0
          for(var i = 0; i < this.dados.length; i++) {
           total = this.dados[0]
          }
          let percent = (value/total)*100
          return `${percent.toFixed(1)}%`
        },
        font:{
          weight: 'bold',
          size: 12,
          family: 'sans-serif'
        },
        color: '#fff',

      },
      tooltip: {
        backgroundColor: '#fff',
        borderColor: 'hsl(209, 100%, 50%)',
        borderWidth: 1,
        titleColor: 'black',
        usePointStyle: true,
        displayColors: true,
        callbacks: {
          labelTextColor: ()=> {
            return '#010c2a'
          },


        }
      },
    }
  };

  ngOnInit(){
    this.chartLabels = this.rotulos;
  }

  ngOnChanges(changes: SimpleChanges){
    this.chartDatasets = [{
      data: [(this.dados[0] - this.dados[1]), this.dados[1]],
      backgroundColor: ['#142240','#3F6ECC'],
      hoverBackgroundColor:['#020F59', '#0526E6'],
      hoverBorderColor: ['#fff'],
      hoverOffset: 4,
    }];
  }
}
