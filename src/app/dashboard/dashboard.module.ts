import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TableComponent } from './table/table.component';
import { CardsComponent } from './cards/cards.component';
import {  FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    TableComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CabecalhoModule,
    FormsModule
  ]
})
export class DashboardModule { }
