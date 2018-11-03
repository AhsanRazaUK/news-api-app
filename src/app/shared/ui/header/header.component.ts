import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: CategoriesService) { }
  Categories: any;
  ngOnInit() {
    this.service.GetCategories().subscribe((data: any) => { this.Categories = data; });
  }

}
