import { Component, OnInit } from '@angular/core';
import { CountriesService } from './service/countries-service.service';

@Component({
  selector: 'countries-select',
  templateUrl: './countries-select.component.html',
  styleUrls: ['./countries-select.component.css']
})
export class CountriesSelectComponent implements OnInit {

  constructor(private service: CountriesService) { }
  Countries: any[];
  ngOnInit() {
    this.service.getCountries().subscribe((data: any[]) => { this.Countries = data; console.log(data); });
  }
}
