import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../../models/quotes';

@Component({
  selector: 'app-quotes-info',
  templateUrl: './quotes-info.component.html',
  styleUrls: ['./quotes-info.component.css']
})
export class QuotesInfoComponent implements OnInit {

  @Input() quote: Quotes;
  constructor() { }

  ngOnInit(): void {
  }

}
