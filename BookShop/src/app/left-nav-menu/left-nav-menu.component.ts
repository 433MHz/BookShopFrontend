import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-nav-menu',
  templateUrl: './left-nav-menu.component.html',
  styleUrls: ['./left-nav-menu.component.css']
})
export class LeftNavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() buttons: [];
  @Output() clickedButtonNumber = new EventEmitter<number>();

  returnClickedButtonValue(buttonNumber){
    this.clickedButtonNumber.emit(buttonNumber);
  }
}
