import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { QuotesService } from '../quotes.service';

export class Quote{
  constructor(
    public text: string,
    public author: string
  ){}

}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "My To Do Center";
  randomQuote: Quote;
  quotes: Quote[];
 
  
  constructor(
    //private quotesService: QuotesService,
    private http: HttpClient) { 
  }


  ngOnInit(): void {
    
    this.getQuotes();
    //this.getRandomQuote();
    //this.quotes = this.quotesService.getQuotes();
  }


  getQuotes(){
    return this.http.get<any>("https://type.fit/api/quotes").subscribe(
      response => {
        console.log(response);
        this.quotes = response;
      }
    );
  }

  getRandomQuote(){
    console.log("hello im running");
    this.randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }

}

