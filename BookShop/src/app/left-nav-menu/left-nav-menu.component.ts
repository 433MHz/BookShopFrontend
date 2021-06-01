import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav-menu',
  templateUrl: './left-nav-menu.component.html',
  styleUrls: ['./left-nav-menu.component.css']
})
export class LeftNavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Test code only! Need to be changed to code getting this array of objects from parent compontn
  buttons = [
    {id: 1, name: 'First'},
    {id: 2, name: 'Second'},
    {id:3, name: 'Third'}
  ]

  // Need to change this to parse data to parent 
  returnClickedButtonValue(buttonNumber){
    console.log(buttonNumber)
  }
}
