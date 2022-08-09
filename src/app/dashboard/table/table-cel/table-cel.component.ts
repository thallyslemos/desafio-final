import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-cel',
  templateUrl: './table-cel.component.html',
  styleUrls: ['./table-cel.component.css']
})
export class TableCelComponent implements OnInit {
  @Input() img: any
  constructor() { }

  ngOnInit(): void {
  }

}
