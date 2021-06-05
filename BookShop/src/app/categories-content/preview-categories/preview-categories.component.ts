import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Categories{
  constructor(
    id: number,
    name: string
  ){}
}


@Component({
  selector: 'app-preview-categories',
  templateUrl: './preview-categories.component.html',
  styleUrls: ['./preview-categories.component.css']
})
export class PreviewCategoriesComponent implements OnInit {

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  categories: Categories;

  // Need to add api connection for editing and deleting category

  getCategories(){
    this.httpClient.get<any>('http://localhost:8081/categories/getAll').subscribe(
      response => {
        this.categories = response;
      }
    )
  }

  editCategoryName(categoryID:number){

  }

  deleteCategory(categoryID:number){

  }

}
