import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgxPermissionsModule } from 'ngx-permissions';

import { NaMenuService } from './na-menu.service';
import { NaSidebarMenuItemComponent } from './na-sidebar-menu-item/na-sidebar-menu-item.component';
import { NaSidebarComponent } from './na-sidebar.component';
import { NaSidebarService } from './na-sidebar.service';


@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NgxPermissionsModule,
    RouterModule,
  ],
  declarations: [
    NaSidebarComponent,
    NaSidebarMenuItemComponent,
  ],
  exports: [
    NaSidebarComponent,
  ],
})
export class NaSidebarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NaSidebarModule,
      providers: [
        NaMenuService,
        NaSidebarService,
      ],
    };
  }
}
