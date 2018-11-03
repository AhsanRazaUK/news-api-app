import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsApiSourcesComponent } from './news-api-sources.component';

describe('NewsApiSourcesComponent', () => {
  let component: NewsApiSourcesComponent;
  let fixture: ComponentFixture<NewsApiSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsApiSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsApiSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
