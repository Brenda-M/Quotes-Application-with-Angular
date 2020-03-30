import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddQuoteFormComponent } from './components/add-quote-form/add-quote-form.component';
import { QuotesInfoComponent } from './components/quotes-info/quotes-info.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { DateCountPipe } from './pipes/date-count.pipe';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    AddQuoteFormComponent,
    QuotesInfoComponent,
    QuotesComponent,
    DateCountPipe,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
