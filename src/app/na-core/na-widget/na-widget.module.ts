import { NgModule } from '@angular/core';

import { NaBreadcrumbModule } from './na-breadcrumb/na-breadcrumb.module';
import { NaContentTopModule } from './na-content-top/na-content-top.module';
import { NaNoticeCenterModule } from './na-notice-center/na-notice-center.module';
import { NaPageTopModule } from './na-page-top/na-page-top.module';
import { NaSidebarModule } from './na-sidebar/na-sidebar.module';
import { NaUserCenterModule } from './na-user-center/na-user-center.module';

@NgModule({
  imports: [
    NaSidebarModule,
    NaContentTopModule,
    NaBreadcrumbModule,
    NaPageTopModule,
    NaUserCenterModule,
    NaNoticeCenterModule,
  ],
  declarations: [
  ],
  exports: [
    NaSidebarModule,
    NaContentTopModule,
    NaBreadcrumbModule,
    NaPageTopModule,
    NaUserCenterModule,
    NaNoticeCenterModule,
  ],
})
export class NaWidgetModule { }
