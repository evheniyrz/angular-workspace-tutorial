import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsGridComponent } from './cards-grid.component';

describe('CardsGridComponent', () => {
  let component: CardsGridComponent;
  let fixture: ComponentFixture<CardsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
