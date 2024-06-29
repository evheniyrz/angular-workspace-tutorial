import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('./pages/contacts/contacts.component').then(
        (c) => c.ContactsComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/about-us/about-us.component').then(
        (c) => c.AboutUsComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('@shared/components').then((c) => c.RouteErrorPageComponent),
  },
];
