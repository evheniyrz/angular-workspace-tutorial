import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoleDirective } from '@shared/directives';

@Component({
  selector: 'public-about-us',
  standalone: true,
  imports: [FormsModule, RoleDirective, NgTemplateOutlet],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  role = 'admins';
}
