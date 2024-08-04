import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { TopSliderComponent } from '../top-slider/top-slider.component';
// import 'swiper/scss/bundle';
register();

@Component({
  selector: 'lib-slider',
  standalone: true,
  imports: [TopSliderComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderComponent {}
