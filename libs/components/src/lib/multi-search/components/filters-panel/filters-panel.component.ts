import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FiltersItemComponent } from '../filters-item/filters-item.component';

@Component({
    selector: 'lib-filters-panel',
    imports: [MatIconModule, FiltersItemComponent],
    templateUrl: './filters-panel.component.html',
    styleUrl: './filters-panel.component.scss'
})
export class FiltersPanelComponent {}
