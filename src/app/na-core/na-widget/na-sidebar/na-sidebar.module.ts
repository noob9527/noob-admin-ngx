import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgxPermissionsModule } from 'ngx-permissions';

import { NaMenuService } from './na-menu.service';
import { NaSidebarMenuItemComponent } from './na-sidebar-menu-item/na-sidebar-menu-item.component';
import { NaSidebarComponent } from './na-sidebar.component';


@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NgxPermissionsModule,
    RouterModule.forChild([]),
  ],
  declarations: [
    NaSidebarComponent,
    NaSidebarMenuItemComponent,
  ],
  exports: [
    NaSidebarComponent,
  ],
  providers: [
    NaMenuService,
  ],
})
export class NaSidebarModule { }
