import { Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { AuthGuard } from '../na-core/na-service/authentication/auth.guard';
import { PagesComponent } from './pages.component';

export const routes: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    canActivateChild: [NgxPermissionsGuard],
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
        path: 'acl',
        loadChildren: './acl/acl.module#AclModule',
        data: {
          breadcrumb: { label: 'Acl' },
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
