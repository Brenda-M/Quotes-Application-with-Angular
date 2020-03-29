import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../../models/quotes'

@Component({
  selector: 'app-add-quote-form',
  templateUrl: './add-quote-form.component.html',
  styleUrls: ['./add-quote-form.component.css']
})
export class AddQuoteFormComponent implements OnInit {
newQuote = new Quotes(0, "", "", "", new Date(), 0, 0);
  

enableAdd: boolean = false;

  fireEvent(){
    console.log("hey")
  }
   onSubmit(){
     alert("hey")
   }



 
 

  constructor() { }

  ngOnInit(): void {
  }

}
