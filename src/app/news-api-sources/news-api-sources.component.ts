import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../shared/news-api-service/news-api.service';
import { NewsApiSource } from '../shared/news-api-service/models/news-api-source.model';

@Component({
  selector: 'news-api-sources',
  templateUrl: './news-api-sources.component.html',
  styleUrls: ['./news-api-sources.component.css', '../../../node_modules/flag-icon-css/css/flag-icon.css']
})
export class NewsApiSourcesComponent implements OnInit {

  NewsSources: any[];

  constructor(private service: NewsApiService) { }

  ngOnInit() {
    this.getSources();
  }

  getSources(): void {
    this.service.getSources().subscribe((data: NewsApiSource) => { this.NewsSources = data.sources; });
  }
}
