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

  categories=[
    {id:1, name:'first'},
    {id:2, name:'second'}
  ];

  // Need to add api connection for editing and deleting category

  editCategoryName(categoryID:number){

  }

  deleteCategory(categoryID:number){

  }

}
