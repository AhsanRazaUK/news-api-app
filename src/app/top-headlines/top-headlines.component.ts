import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../shared/news-api-service/news-api.service';
import { Articles } from '../shared/news-api-service/models/articles.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.css']
})
export class TopHeadlinesComponent implements OnInit {

  TopHeadlines: Articles;
  private route: ActivatedRoute;

  constructor(private service: NewsApiService) { }

  ngOnInit(): void {
    this.GetTopHeadlines();
  }

  GetTopHeadlines(): void {
    let country: string = "gb";
    let category: string = "world";

    category = this.route.snapshot.queryParamMap.get('category');

    console.log(category);

    this.service.getTopHeadlines(country, category).subscribe((data: any) => { this.TopHeadlines = data.articles; });
  }
}
