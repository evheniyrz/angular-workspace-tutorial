import { APP_BASE_HREF } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: APP_BASE_HREF, useValue: '/profile' }],
})
export class AppComponent {
  title = 'profile';
}
