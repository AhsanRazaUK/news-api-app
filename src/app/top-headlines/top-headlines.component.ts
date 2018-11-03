import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../shared/news-api-service/news-api.service';
import { Articles } from '../shared/news-api-service/models/articles.model';

@Component({
  selector: 'top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.css']
})
export class TopHeadlinesComponent implements OnInit {

  TopHeadlines: Articles;

  constructor(private service: NewsApiService) { }

  ngOnInit() {
    return this.service.getTopHeadlines('gb').subscribe((data: any) => { this.TopHeadlines = data.articles; console.log(data); })
  }
}
