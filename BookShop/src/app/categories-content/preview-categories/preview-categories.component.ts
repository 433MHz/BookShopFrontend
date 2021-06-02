import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-categories',
  templateUrl: './preview-categories.component.html',
  styleUrls: ['./preview-categories.component.css']
})
export class PreviewCategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories: [];

  // Need to add api connection for editing and deleting category

  editCategoryName(categoryID:number){

  }

  deleteCategory(categoryID:number){

  }

}
