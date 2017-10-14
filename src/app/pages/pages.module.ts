import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CoreModule } from '../core/core.module';
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
    CommonModule,
    CoreModule,
    NaCoreModule.forRoot(),
    NgZorroAntdModule.forRoot(),
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
