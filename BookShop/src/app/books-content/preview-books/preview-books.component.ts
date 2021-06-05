import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Books {
  constructor(
  public id: number,
  public title: string,
  public authorFirstName: string,
  public authorSurname: string,
  public year: number,
  public category: Category
  ){}
}

export class Category {
  id: number;
  name: string;
  listOfBooks: Books[];
}


@Component({
  selector: 'app-preview-books',
  templateUrl: './preview-books.component.html',
  styleUrls: ['./preview-books.component.css']
})
export class PreviewBooksComponent implements OnInit {

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getBooks();
  }

  // Need to implement api connection here in future for getting books list, deleting book and editing book

  books: Books[];

  getBooks(){
    this.httpClient.get<any>('http://localhost:8081/books/getAll').subscribe(
      response => {
        this.books = response;
      }
    );
  }

}
