import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSearchResultsComponent } from './multi-search-results.component';

describe('MultiSearchResultsComponent', () => {
  let component: MultiSearchResultsComponent;
  let fixture: ComponentFixture<MultiSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSearchResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
