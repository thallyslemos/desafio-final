import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cel',
  templateUrl: './cel.component.html',
  styleUrls: ['./cel.component.css']
})
export class CelComponent implements OnInit {

  @Input()
  veiculos!: any
  @Input()
  dado!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
