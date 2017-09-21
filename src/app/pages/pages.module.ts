import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { PagesComponent } from './pages.component';
import { routes } from './pages.routing';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class PagesModule {
}
