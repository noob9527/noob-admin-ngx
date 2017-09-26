import { NaBreadcrumbService } from './naBreadcrumb/naBreadcrumb.service';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { NaSidebarMenuItemComponent } from './naSidebar/naSidebarMenuItem/naSidebarMenuItem.component';
import { NaMenuService } from './naSidebar/naMenu.service';
import { NgModule } from '@angular/core';
import { NaSidebarComponent } from './naSidebar/naSidebar.component';
import { NaContentTopComponent } from './naContentTop/naContentTop.component';
import { NaBreadcrumbComponent } from './naBreadcrumb/naBreadcrumb.component';

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
  ],
  exports: [
    NaSidebarComponent,
    NaContentTopComponent,
  ],
  providers: [
    NaMenuService,
    NaBreadcrumbService,
  ],
})
export class NaCoreWidgetModule { }
