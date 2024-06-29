import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.routes').then((r) => r.PROFILE_PAGE_ROUTES),
  },
  {
    path: '**',
    loadComponent: () =>
      import('@shared-lib/components').then((c) => c.RouteErrorPageComponent),
  },
];
