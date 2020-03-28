import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../../models/quotes';

@Component({
  selector: 'app-quotes-info',
  templateUrl: './quotes-info.component.html',
  styleUrls: ['./quotes-info.component.css']
})
export class QuotesInfoComponent implements OnInit {

  @Input() quote: Quotes;
  @Output() isDelete = new EventEmitter<boolean>();

  // deleteQuote(delete:boolean){
  //   this.isDelete.emit(delete);
  // }
  // constructor(); { }

  ngOnInit() {
  }

}
