import { Component } from '@angular/core';
import { TopSliderComponent } from '@shared/components';

@Component({
  selector: 'public-main-page',
  standalone: true,
  imports: [TopSliderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
