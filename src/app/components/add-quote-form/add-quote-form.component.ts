import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Quotes } from '../../models/quotes'

@Component({
  selector: 'app-add-quote-form',
  templateUrl: './add-quote-form.component.html',
  styleUrls: ['./add-quote-form.component.css']
})
export class AddQuoteFormComponent implements OnInit {
  enableAdd: boolean = false;
  @Output() addQuote = new EventEmitter<Quotes>();
  newQuote = new Quotes(0, "", "", "", new Date(), 0, 0);
  

  submitQuote(){ 
    this.addQuote.emit(this.newQuote);  
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
