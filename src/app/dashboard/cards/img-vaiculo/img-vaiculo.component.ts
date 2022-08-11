import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-vaiculo',
  templateUrl: './img-vaiculo.component.html',
  styleUrls: ['./img-vaiculo.component.css']
})
export class ImgVaiculoComponent implements OnInit {
  @Input() img: any

  constructor() { }

  ngOnInit(): void {
  }

}
