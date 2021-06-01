import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-content',
  templateUrl: './books-content.component.html',
  styleUrls: ['./books-content.component.css']
})
export class BooksContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttons = [
    {id: 1, name:"Add Book"},
    {id: 2, name:"Preview Books"},
  ]

}
