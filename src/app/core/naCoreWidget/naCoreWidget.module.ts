import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { NaSidebarMenuItemComponent } from './naSidebar/naSidebarMenuItem/naSidebarMenuItem.component';
import { NaMenuService } from './naSidebar/naMenu.service';
import { NgModule } from '@angular/core';
import { NaSidebarComponent } from './naSidebar/naSidebar.component';

@NgModule({
  imports: [
    NgZorroAntdModule,
    CommonModule,
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
export class NaCoreWidgetModule { }
