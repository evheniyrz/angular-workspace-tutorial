import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdcutCardComponent } from '@shared/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProdcutCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'catalog';
}
