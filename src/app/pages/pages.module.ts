import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { routes } from './pages.routing';

import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class PagesModule {
}
