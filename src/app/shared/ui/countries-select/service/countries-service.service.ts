import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CountriesService {
  
  constructor(private http: HttpClient) { }

  getCountries(): Observable<any> {
    return this.http.get<any>(`https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/all/all.json`);
  }
}
