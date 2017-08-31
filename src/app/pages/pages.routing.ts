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
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'about', loadChildren: './about/about.module#AboutModule' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    ]
  },
];
