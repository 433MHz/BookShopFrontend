import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Category {
  constructor(
  id: number,
  name: string
  ){}
}

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(
    private httpClient: HttpClient)
     {}

  ngOnInit(): void {
  }

  categoryName: string;
  response: string;

  category = {
    name: null
  }

  // Need to add function to check if category name exist in database

  postCategory(){
    this.category.name = this.categoryName;

    this.httpClient.post('http://localhost:8081/categories/add' , this.category, {headers:new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text'}).subscribe(
      data => {this.response = data;
      }
    )
  
  }
}
