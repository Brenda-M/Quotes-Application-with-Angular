import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Quotes } from '../../models/quotes'

@Component({
  selector: 'app-add-quote-form',
  templateUrl: './add-quote-form.component.html',
  styleUrls: ['./add-quote-form.component.css']
})
export class AddQuoteFormComponent implements OnInit {

  @Output() addQuote = new EventEmitter<Quotes>();
  @ViewChild ('entryForm') form: any;
  
  enableAdd: boolean = false;
  newQuote = new Quotes(0, "", "", "", new Date(), 0, 0);

  submitQuote(value){ 
    this.addQuote.emit(this.newQuote); 
    this.newQuote = new Quotes(0, "", "", "", new Date(), 0, 0);
    this.form.reset();   
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
