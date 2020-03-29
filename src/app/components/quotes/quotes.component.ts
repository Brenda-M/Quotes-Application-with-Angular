import { Component, OnInit } from '@angular/core';
import { Quotes } from '../../models/quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quotes(1,'Life can only be understood backwords; but it must be lived fowards', 'Soren Kierkegaard', 'Joe86', new Date(2019, 0, 6), 0, 0),
    new Quotes(2, 'Beware of the barrenness of a busy life', 'Socrates', 'Bill Rogers', new Date(2016, 2,8), 0, 0),
    new Quotes (3, 'Knowledge is knowing a tomato is a fruit; wisdom is not puting it in a fruit salad', 'Miles Kington', 'MO', new Date(2017, 1, 5), 0, 0),
    new Quotes (4, 'Always borrow money from a pessimist. He won\'t expect it back', 'Oscar Wilde', 'Ian Stan', new Date (2020, 0, 1), 0, 0),
    new Quotes (5, 'I doubt vodka is the answer. But it is worth a shot', 'Larry F', 'User95', new Date (2019, 6, 25),0, 0)
  ]

  prevNum:number
  lastNum:number
  counter:number
  
  moreDetails(index){
    this.quotes[index].showDetails=!this.quotes[index].showDetails
  }

  highestLikes(){
    this.prevNum = 0
    this.lastNum = 0
    for (this.counter = 0; this.counter < this.quotes.length;this.counter++){
      this.lastNum = this.quotes[this.counter].upvote;
      if(this.lastNum > this.prevNum){
        this.prevNum = this.lastNum
      }
    }
    return this.prevNum 
  }
  
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.unshift(quote)
  }

  quoteDelete(isDelete, index){
    if (isDelete) {

      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].authorName}'s quote?`)

      if (toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
  

  constructor() {

   }

  ngOnInit(){
    
  }

}
