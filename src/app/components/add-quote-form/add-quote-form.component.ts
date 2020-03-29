import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../../models/quotes'

@Component({
  selector: 'app-add-quote-form',
  templateUrl: './add-quote-form.component.html',
  styleUrls: ['./add-quote-form.component.css']
})
export class AddQuoteFormComponent implements OnInit {
  enableAdd: boolean = false;
  newQuote = new Quotes(0, "", "", "", new Date(), 0, 0);

  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
