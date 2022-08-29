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

  centerText = { id: 'centerTextDoughnut', dados: [] , afterDatasetsDraw(chart: any, args: any, pluginOptions: any) {
    let { ctx } = chart;
    ctx.restore()
    ctx.textAlign ='center';
    ctx.textBaseLine = 'midle';
    ctx.font = 'bold 12px sans-serif'
    const text = '%';
    const textWidith = ctx.measureText(text).width;
    const x = chart.getDatasetMeta(0).data[0].x;
    const y = chart.getDatasetMeta(0).data[0].y;

    ctx.fillText(text, x, y)
    ctx.save()
  }}

  chartPlugins = [ ChartDataLabels, this.centerText ];

  chartOptions: ChartConfiguration<'doughnut'>['options']= {
    responsive: true,
    cutout: '30%',
    datasets: { },
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
          console.log(percent)
          console.log(ctx)
          return `${percent.toFixed(1)}%`
        },
        font:{
          weight: 'bold',
          size: 14,
          family: 'sans-serif',
        },
        anchor: 'center',
        align: 'center',
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
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
    this.chartDatasets = [{
      data: [(this.dados[0] - this.dados[1]), this.dados[1]],
      backgroundColor: ['#010c2a', '#1351d8'],
      hoverBackgroundColor:[ '#01025c', '#1300fa'],
      hoverBorderColor: ['#fff'],
      hoverOffset: 4,
    }]
  }
}
