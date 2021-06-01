import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftNavMenuComponent } from './left-nav-menu/left-nav-menu.component';
import { CategoriesContentComponent } from './categories-content/categories-content.component';
import { BooksContentComponent } from './books-content/books-content.component';
import { AddCategoryComponent } from './categories-content/add-category/add-category.component';
import { PreviewCategoriesComponent } from './categories-content/preview-categories/preview-categories.component';
import { AddBookComponent } from './books-content/add-book/add-book.component';
import { PreviewBooksComponent } from './books-content/preview-books/preview-books.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavMenuComponent,
    CategoriesContentComponent,
    BooksContentComponent,
    AddCategoryComponent,
    PreviewCategoriesComponent,
    AddBookComponent,
    PreviewBooksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
