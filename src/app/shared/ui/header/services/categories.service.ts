import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriesService {

  constructor(private http: HttpClient) { }

  GetCategories(): Observable<any> {

    const jsonFile = `assets/categories.json`;
    return this.http.get<any>(jsonFile);
 }
}
