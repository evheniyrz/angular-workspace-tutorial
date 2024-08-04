import { Component } from '@angular/core';
import { SliderComponent } from '@shared/components';

@Component({
  selector: 'public-main-page',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
