import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgxPermissionsModule } from 'ngx-permissions';

import { NaBreadcrumbComponent } from './na-breadcrumb/na-breadcrumb.component';
import { NaBreadcrumbService } from './na-breadcrumb/na-breadcrumb.service';
import { NaContentTopComponent } from './na-content-top/na-content-top.component';
import { NaPageTopComponent } from './na-page-top/na-page-top.component';
import { NaMenuService } from './na-sidebar/na-menu.service';
import { NaSidebarMenuItemComponent } from './na-sidebar/na-sidebar-menu-item/na-sidebar-menu-item.component';
import { NaSidebarComponent } from './na-sidebar/na-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    NgZorroAntdModule,
    NgxPermissionsModule,
  ],
  declarations: [
    NaSidebarComponent,
    NaSidebarMenuItemComponent,
    NaContentTopComponent,
    NaBreadcrumbComponent,
    NaPageTopComponent,
],
  exports: [
    NaSidebarComponent,
    NaContentTopComponent,
    NaPageTopComponent,
  ],
  providers: [
    NaMenuService,
    NaBreadcrumbService,
  ],
})
export class NaWidgetModule { }
