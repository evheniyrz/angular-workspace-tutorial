import { Routes } from '@angular/router';

export const PROFILE_PAGE_ROUTES: Routes = [
  {
    path: 'metrics',
    loadComponent: () =>
      import('./metrics/metrics.component').then((c) => c.MetricsComponent),
  },
  {
    path: '',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
];
