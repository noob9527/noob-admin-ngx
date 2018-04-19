import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { NaBreadcrumbComponent } from './na-breadcrumb.component';
import { NaBreadcrumbService } from './na-breadcrumb.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule,
  ],
  declarations: [
    NaBreadcrumbComponent,
  ],
  exports: [
    NaBreadcrumbComponent
  ],
  providers: [
    NaBreadcrumbService,
  ],
})
export class NaBreadcrumbModule {
}
