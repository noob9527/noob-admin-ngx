import { NaBreadcrumbService } from './na-breadcrumb/na-breadcrumb.service';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { NaSidebarMenuItemComponent } from './na-sidebar/na-sidebar-menu-item/na-sidebar-menu-item.component';
import { NaMenuService } from './na-sidebar/na-menu.service';
import { NgModule } from '@angular/core';
import { NaSidebarComponent } from './na-sidebar/na-sidebar.component';
import { NaContentTopComponent } from './na-content-top/na-content-top.component';
import { NaBreadcrumbComponent } from './na-breadcrumb/na-breadcrumb.component';
import { NaPageTopComponent } from './na-page-top/na-page-top.component';

@NgModule({
  imports: [
    NgZorroAntdModule,
    CommonModule,
    RouterModule.forChild([]),
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
