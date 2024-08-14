import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsGridComponent } from '@shared/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardsGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'catalog';
}
