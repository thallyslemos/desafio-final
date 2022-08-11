import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TableComponent } from './table/table.component';
import { CardsComponent } from './cards/cards.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImgVaiculoComponent } from './cards/img-vaiculo/img-vaiculo.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TableComponent,
    CardsComponent,
    ImgVaiculoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CabecalhoModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
