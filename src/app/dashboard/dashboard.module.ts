import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TableComponent } from './table/table.component';
import { CardsComponent } from './cards/cards.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableCelComponent } from './table/table-cel/table-cel.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TableComponent,
    CardsComponent,
    TableCelComponent
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
