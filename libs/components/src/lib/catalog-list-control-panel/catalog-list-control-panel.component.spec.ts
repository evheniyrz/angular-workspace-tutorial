import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogListControlPanelComponent } from './catalog-list-control-panel.component';

describe('CatalogListControlPanelComponent', () => {
  let component: CatalogListControlPanelComponent;
  let fixture: ComponentFixture<CatalogListControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogListControlPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogListControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
