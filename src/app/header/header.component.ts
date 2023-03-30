import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuotesService } from '../quotes.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "My To Do Center";
  quotes!: Observable<object>;
  randomQuote: object;
 
  
  constructor(
    private quotesService: QuotesService) { 
  }


  ngOnInit(): void {
    this.quotes = this.quotesService.getQuotes();
  }

  getRandomQuote():void {
    //this.randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)]
  }

}
