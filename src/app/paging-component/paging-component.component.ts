import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging-component',
  templateUrl: './paging-component.component.html',
  styleUrls: ['./paging-component.component.css']
})
export class PagingComponentComponent implements OnInit {
  //This component will accept a single property "page" (type: number)
  @Input() page;
  //It will emit (output) the event "newPage" which will contain the new page number obtained by clicking on one of the "left" or "right" "page-item" buttons (details below)
  @Output() newPage = new EventEmitter();

  //If the first "page-item" button is clicked(ie: "<" ) , execute the following logic(placed in a separate "callback" function):
  //If the value of "page" is greater than 1 emit the "newPage" event with a value of "page" -1
  previousPage(){
    if(this.page > 1) this.newPage.emit(this.page-1);
    window.scrollTo(0, 0);
  }

  //If the last "page-item" button is clicked (ie: ">" ) , execute the following logic (placed in a separate "callback" function):
  //emit the "newPage" event with a value of "page" + 1
  nextPage(){
    this.newPage.emit(this.page+1);
    window.scrollTo(0, 0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
