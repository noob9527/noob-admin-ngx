import { Routes } from '@angular/router';

import { AuthGuard } from '../core/naCore/authentication/auth.guard';
import { PagesComponent } from './pages.component';

export const routes: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        data: {
          breadcrumb: { label: 'dashboard' },
        },
      },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule',
        data: {
          breadcrumb: { label: 'about' },
        },
      },
      {
        path: 'level',
        loadChildren: './level/level.module#LevelModule',
        data: {
          breadcrumb: {
            label: 'level',
            abstract: true,
          },
        },
      },
    ]
  },
];
