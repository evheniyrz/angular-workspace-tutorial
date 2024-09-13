import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSearchFormComponent } from './multi-search-form.component';

describe('MultiSearchFormComponent', () => {
  let component: MultiSearchFormComponent;
  let fixture: ComponentFixture<MultiSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSearchFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
