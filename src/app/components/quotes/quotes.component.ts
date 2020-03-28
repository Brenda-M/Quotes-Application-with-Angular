import { Component, OnInit } from '@angular/core';
import { Quotes } from '../../models/quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quotes(1,'Life can only be understood backwords; but it must be lived fowards', 'Soren Kierkegaard', 'Joe86' ),
    new Quotes(2, 'Beware of the barrenness of a busy life', 'Socrates', 'Bill Rogers'),
    new Quotes (3, 'Knowledge is knowing a tomato is a fruit; wisdom is not puting it in a fruit salad', 'Miles Kington', 'MO'),
    new Quotes (4, 'Always borrow money from a pessimist. He won\'t expect it back', 'Oscar Wilde'),
    new Quotes (5, 'I doubt vodka is th answer. But is is worth a shot', 'Larry F', 'User95')
  ]
  
  constructor() {

   }

  ngOnInit(){
    
  }

}
