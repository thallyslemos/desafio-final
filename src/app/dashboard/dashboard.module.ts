import { CelComponent } from './../dashboard/table/cel/cel.component';
import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TableComponent } from './table/table.component';
import { CardsComponent } from './cards/cards.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImgVaiculoComponent } from './cards/img-vaiculo/img-vaiculo.component';
import { GraficoComponent } from './cards/grafico/grafico.component';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DashboardComponent,
    TableComponent,
    CardsComponent,
    ImgVaiculoComponent,
    GraficoComponent,
    CelComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CabecalhoModule,
    FormsModule,
    ReactiveFormsModule,
    MensagemModule,
    NgChartsModule
  ]
})
export class DashboardModule { }
