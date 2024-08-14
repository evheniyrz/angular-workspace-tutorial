import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-catalog-list-control-panel',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './catalog-list-control-panel.component.html',
  styleUrl: './catalog-list-control-panel.component.scss',
})
export class CatalogListControlPanelComponent {}
// create service to handle sorting + filtering + layout switch
