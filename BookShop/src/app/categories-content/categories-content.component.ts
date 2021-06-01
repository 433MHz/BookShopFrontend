import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-content',
  templateUrl: './categories-content.component.html',
  styleUrls: ['./categories-content.component.css']
})
export class CategoriesContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttons = [
    {id: 1, name:"Add Category"},
    {id: 2, name:"Preview Categories"},
  ]

  clickedButtonNumber: number = 0;

  getClickedButtonNumber($event){
    this.clickedButtonNumber = $event;
  }

}
