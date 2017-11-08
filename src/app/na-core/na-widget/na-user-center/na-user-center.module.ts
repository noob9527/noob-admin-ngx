import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';

import { NaUserCenterComponent } from './na-user-center.component';


@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ],
  declarations: [
    NaUserCenterComponent,
  ],
  exports: [
    NaUserCenterComponent,
  ],
  providers: [
  ],
})
export class NaUserCenterModule { }
