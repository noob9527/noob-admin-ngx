import { Routes } from '@angular/router';

import { AuthGuard } from '../core/na-core/authentication/auth.guard';
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
          breadcrumb: { label: 'Dashboard' },
        },
      },
      {
        path: 'elements',
        loadChildren: './elements/elements.module#ElementsModule',
        data: {
          breadcrumb: { label: 'Elements' },
        },
      },
      {
        path: 'form',
        loadChildren: './form-elements/form-elements.module#FormElementsModule',
        data: {
          breadcrumb: { label: 'Form elements' },
        },
      },
      {
        path: 'tables',
        loadChildren: './tables/tables.module#TablesModule',
        data: {
          breadcrumb: { label: 'Tables' },
        },
      },
      {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule',
        data: {
          breadcrumb: { label: 'Charts' },
        },
      },
      {
        path: 'level',
        loadChildren: './level/level.module#LevelModule',
        data: {
          breadcrumb: {
            label: 'Level',
            abstract: true,
          },
        },
      },
    ]
  },
  { path: '**', redirectTo: 'dashboard' },
];
