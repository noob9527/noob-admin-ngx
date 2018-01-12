import { Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { NaAuthenticationGuard } from '../na-core/na-service/na-authentication/na-authentication.guard';
import { PagesComponent } from './pages.component';

export const routes: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  {
    path: '',
    component: PagesComponent,
    canActivate: [NaAuthenticationGuard],
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
        path: 'demo',
        loadChildren: './demo/demo.module#DemoModule',
        data: {
          breadcrumb: { label: 'Demo' },
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
