import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NewsApiSource } from './models/news-api-source.model';
import { AppConfig } from '../config/app.config';
import { Articles } from './models/articles.model';

@Injectable()

export class NewsApiService {
  private apiUrl: string = AppConfig.settings.apiServer.metadata;
  private apiKey: string = AppConfig.settings.aad.apiKey;

  constructor(private http: HttpClient) { }

  getSources(): Observable<NewsApiSource> {
    return this.http.get<NewsApiSource>(`${this.apiUrl}sources?apiKey=${this.apiKey}`);
  }

  // getTopHeadlines(country: string): Observable<Articles> {
  //   return this.http.get<Articles>(`${this.apiUrl}top-headlines?country=${country}&apiKey=${this.apiKey}`);
  // }

  getTopHeadlines(country: string, category: string): Observable<Articles> {
    return this.http.get<Articles>(`${this.apiUrl}top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}`);
  }

}



