import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-content',
  templateUrl: './books-content.component.html',
  styleUrls: ['./books-content.component.css', '../booksAndCategories.css']
})
export class BooksContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttons = [
    {id: 1, name:"Add Book"},
    {id: 2, name:"Preview Books"},
  ]

  clickedButtonNumber: number = 1;

  getClickedButtonNumber($event){
    this.clickedButtonNumber = $event;
  }

}
