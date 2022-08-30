import { MenuModule } from './../menu/menu.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho.component';
import { DropdownComponent } from './dropdown/dropdown.component';



@NgModule({
  declarations: [
    CabecalhoComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule, RouterModule, MenuModule
  ],
  exports: [CabecalhoComponent]
})
export class CabecalhoModule { }
