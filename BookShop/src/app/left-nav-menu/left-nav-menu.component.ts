import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav-menu',
  templateUrl: './left-nav-menu.component.html',
  styleUrls: ['./left-nav-menu.component.css']
})
export class LeftNavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() buttons: [];

  returnClickedButtonValue(buttonNumber){
    console.log(buttonNumber)
  }
}
