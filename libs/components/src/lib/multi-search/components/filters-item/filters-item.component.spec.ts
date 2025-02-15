import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersItemComponent } from './filters-item.component';

describe('FiltersItemComponent', () => {
  let component: FiltersItemComponent;
  let fixture: ComponentFixture<FiltersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
