import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';

import { NaPageTopComponent } from './na-page-top.component';


@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ],
  declarations: [
    NaPageTopComponent,
  ],
  exports: [
    NaPageTopComponent,
  ],
  providers: [
  ],
})
export class NaPageTopModule { }
