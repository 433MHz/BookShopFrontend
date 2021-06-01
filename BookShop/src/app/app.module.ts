import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftNavMenuComponent } from './left-nav-menu/left-nav-menu.component';
import { CategoriesContentComponent } from './categories-content/categories-content.component';
import { BooksContentComponent } from './books-content/books-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavMenuComponent,
    CategoriesContentComponent,
    BooksContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
