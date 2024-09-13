import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsGridComponent } from '@shared/components';
import { MultiSearchComponent } from "@shared/components";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardsGridComponent, MultiSearchComponent, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  parseFormData(data: FormData) {
    console.log({ D: JSON.stringify(data.entries()) });
  }
  title = 'catalog';
}
