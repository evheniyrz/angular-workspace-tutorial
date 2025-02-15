import { Component } from '@angular/core';
import { FiltersPanelComponent } from '../filters-panel/filters-panel.component';

@Component({
    selector: 'lib-multi-search-results',
    imports: [FiltersPanelComponent],
    templateUrl: './multi-search-results.component.html',
    styleUrl: './multi-search-results.component.scss'
})
export class MultiSearchResultsComponent {}
