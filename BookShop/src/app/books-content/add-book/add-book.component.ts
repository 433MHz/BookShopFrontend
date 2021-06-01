import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Need to fetch it from api in future
  options = [
    {id: 1, name: 'horror'},
    {id: 2, name: 'komedia'},
    {id: 3, name: 'test'},
  ];

  bookData = {
    bookTitle: '',
    authorFirstName: '',
    authorLastName: '',
    yearOfPublishment: null,
    category: '1'
  }


  // Need to add api in future
  sendBookToBackend(){
    console.log(this.bookData);
  }

}
