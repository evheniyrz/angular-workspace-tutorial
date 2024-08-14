import { Component } from '@angular/core';
import { CatalogListControlPanelComponent } from '../catalog-list-control-panel/catalog-list-control-panel.component';
import { ProdcutCardComponent } from '../prodcut-card/prodcut-card.component';

@Component({
  selector: 'lib-cards-grid',
  standalone: true,
  imports: [CatalogListControlPanelComponent, ProdcutCardComponent],
  templateUrl: './cards-grid.component.html',
  styleUrl: './cards-grid.component.scss',
})
export class CardsGridComponent {
  cards: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
