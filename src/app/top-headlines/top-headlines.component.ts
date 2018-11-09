import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../shared/news-api-service/news-api.service';
import { Articles } from '../shared/news-api-service/models/articles.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.css']
})
export class TopHeadlinesComponent implements OnInit {

  TopHeadlines: Articles;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private service: NewsApiService) { }

  ngOnInit(): void {
    this.GetTopHeadlines();
  }

  GetTopHeadlines(): void {
    let country: string = "us";
    let category:string = "politics";

    if (this.route.snapshot.url[0]) {
      category = this.route.snapshot.url[0].path;
    }

    console.log(category);

    this.service.getTopHeadlines(country, category).subscribe((data: any) => { this.TopHeadlines = data.articles; console.log(data); });
  }
}
