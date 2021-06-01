import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-books',
  templateUrl: './preview-books.component.html',
  styleUrls: ['./preview-books.component.css']
})
export class PreviewBooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Need to implement api connection here in future for getting books list, deleting book and editing book

  books = [
    {id:1},
    {id:2},
    {id:3},
  ]

}
