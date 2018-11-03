import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { AppConfig } from './shared/config/app.config';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/ui/header/header.component';
import { FooterComponent } from './shared/ui/footer/footer.component';
import { NewsApiSourcesComponent } from './news-api-sources/news-api-sources.component';
import { NewsApiService } from './shared/news-api-service/news-api.service';
import { CountriesSelectComponent } from './shared/ui/countries-select/countries-select.component';
import { CountriesService } from './shared/ui/countries-select/service/countries-service.service';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import {MatCardModule } from '@angular/material';

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsApiSourcesComponent,
    CountriesSelectComponent,
    TopHeadlinesComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,  MatCardModule 
  ],
  providers: [AppConfig, { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppConfig], multi: true }, NewsApiService, CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
