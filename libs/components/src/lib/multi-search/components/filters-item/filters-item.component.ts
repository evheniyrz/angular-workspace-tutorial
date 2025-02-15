import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'lib-filters-item',
    imports: [MatButtonModule],
    templateUrl: './filters-item.component.html',
    styleUrl: './filters-item.component.scss'
})
export class FiltersItemComponent {
  @Input({ required: true }) content!: {
    category: string;
    productsCount: number;
    categoryDisplayName: string;
  };
}
