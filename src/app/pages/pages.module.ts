import { NaBreadcrumbService } from '../na-core/na-widget/na-breadcrumb/na-breadcrumb.service';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NaCoreModule } from '../na-core/na-core.module';
import { PagesComponent } from './pages.component';
import { routes } from './pages.routing';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    NaCoreModule,
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class PagesModule {
  constructor(naBreadcrumbService: NaBreadcrumbService) {
    naBreadcrumbService.setPrefixBreadcrumbs([{
      label: 'Dashboard',
      url: '/',
    }]);
  }
}
