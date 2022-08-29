import { Component, ElementRef, Input, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, registerables, } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  @Input() dados!:any
  @Input() rotulos!:any

  @ViewChild( 'meuCanvas', { static: true}) elemnento!: ElementRef

  chartLabels: string[]= [];
  chartDatasets: ChartConfiguration<'doughnut'>['data']['datasets']= [
    { data: [], label: 'DashboardChart', }
  ];
  centerText = { id: 'centerTextDoughnut', dados: '' , afterDatasetsDraw(chart: any, args: any, pluginOptions: any) {
    let { ctx } = chart;
      ctx.textAlign ='center';
      ctx.textBaseLine = 'midle';
      ctx.font = 'bold 24px sans-serif';
      const text = `${this.dados}%`;
      const textWidith = ctx.measureText(text).width;
      const x = chart.getDatasetMeta(0).data[0].x;
      const y = chart.getDatasetMeta(0).data[0].y;

      ctx.fillText(text, x, y)
    }}
  chartPlugins = [ ChartDataLabels, this.centerText ];

  chartOptions: ChartConfiguration<'doughnut'>['options']= {
    responsive: true,
    cutout: '80%',
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
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
          family: 'sans-serif',
        },
        color: '#fff'
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
  b!: any
  porcentagem(valor1: any, valor2: any) {
    let percentual = (valor1/(valor1 + valor2)*100).toFixed(1);
    return percentual;
  }
  ngOnChanges(changes: SimpleChanges){
    this.chartDatasets = [{
      data: [(this.dados[0] - this.dados[1]), this.dados[1]],
      backgroundColor: ['#010c2a', '#1351d8'],
      hoverBackgroundColor:[ '#01025c', '#1300fa'],
      hoverBorderColor: ['#fff'],
      hoverOffset: 4,
    }];
    let a = this.porcentagem(this.chartDatasets[0].data[1], this.chartDatasets[0].data[0])
    //  (this.chartDatasets[0].data[1]/(this.chartDatasets[0].data[0]+this.chartDatasets[0].data[1])*100).toFixed(1);
    console.log(this.chartDatasets[0].data, a);
    this.centerText.dados = a
  }
}
