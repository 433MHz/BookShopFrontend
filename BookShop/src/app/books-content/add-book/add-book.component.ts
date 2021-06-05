import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Category{
  constructor(
    id: number,
    name: string
  ){}
}

export class Book{
  constructor(
    id: number,
    title: string,
    authorFirstName: string,
    authorSurname: string,
    year: number,
    category: Category
  ){}
}

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  // Need to fetch it from api in future

  bookData = {
    id: null,
    title: '',
    authorFirstName: '',
    authorSurname: '',
    year: 1999,
    category: null
  }

  categories: Category

  selectedOption: string;

  responseMessage: string;

  // Need to add api in future
  sendBookToBackend(){

    this.httpClient.post<Category>('http://localhost:8081/categories/getById', this.selectedOption, {headers:new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'json'}).subscribe(
      data => {
        this.bookData.category = data;
      }
    )

    console.log(this.bookData)

    this.httpClient.post('http://localhost:8081/books/add', this.bookData, {headers:new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text'}).subscribe(
      data => {
        this.responseMessage = data
      }
    )

  }

  getAllCategories(){

    this.httpClient.get<any>('http://localhost:8081/categories/getAll').subscribe(
      response => {
      this.categories = response
      }
    )
  }

}
