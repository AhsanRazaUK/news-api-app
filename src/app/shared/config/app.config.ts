import { Injectable } from '@angular/core';
import { IAppConfig } from './app-config.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/do';

@Injectable()
export class AppConfig {
  static settings: IAppConfig;

  constructor(private http: HttpClient) { }
  load() {
    console.log(environment);
    const jsonFile = `assets/config/config.${environment.name}.json`;
    return this.http.get<IAppConfig>(jsonFile).do((data: IAppConfig) => { AppConfig.settings = data;}).toPromise();
  }
}

