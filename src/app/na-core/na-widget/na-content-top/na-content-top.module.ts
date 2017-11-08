import { NaBreadcrumbModule } from '../na-breadcrumb/na-breadcrumb.module';
import { NaContentTopComponent } from './na-content-top.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NaBreadcrumbModule,
  ],
  declarations: [
    NaContentTopComponent,
  ],
  exports: [
    NaContentTopComponent,
  ],
  providers: [
  ],
})
export class NaContentTopModule { }
