import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent{

  // properties
  name = 'Clean Code';
  author = "Robert C Martin";
  isDisabled = false;

 // method to disable the button
  handleClick(){
    this.isDisabled = true;
  }

  myName: string = "";

 // method that takes in an event then binds whatever input it gets as one string
  handleInput(event:any){
    this.myName = event.target.value;
  }
}
