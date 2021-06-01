import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categoryName: string;


  // Need to add function to check if category name exist in database
}
