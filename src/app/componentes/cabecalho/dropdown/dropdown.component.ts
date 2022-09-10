import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  showMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(){
    this.showMenu = !this.showMenu;
  }

}
