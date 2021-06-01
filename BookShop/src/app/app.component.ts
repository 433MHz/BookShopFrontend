import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookShop';

  showCategoriesComponent = true;
  showBooksComponent = false;

  changeStateOfCategoriesComponentVisiblity(){
    this.showBooksComponent = false;
    this.showCategoriesComponent = true;
  }

  changeStateOfBooksComponentVisiblity(){
    this.showCategoriesComponent = false;
    this.showBooksComponent = true;
  }
}
