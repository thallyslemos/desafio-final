import { RouterModule } from '@angular/router';
import { MensagemComponent } from './mensagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MensagemComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [MensagemComponent]
})
export class MensagemModule { }
