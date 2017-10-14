import { Component, Input, OnInit } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { MenuItem } from './menu-item.model';
import { NaMenuService } from './na-menu.service';

@Component({
  selector: 'na-sidebar',
  template: `
    <div class="logo">
      <img src="assets/image/logo.svg" alt="logo">
      <span>{{appName}}</span>
    </div>
    <ul nz-menu [nzMode]="menuMode" [nzTheme]="'dark'">
      <ng-template
        *ngFor="let item of menuItems"
        [ngxPermissionsOnly]="item.data?.permissions?.only"
        [ngxPermissionsExcept]="item.data?.permissions?.except"
      >
        <na-sidebar-menu-item
          [menuItem]="item"
          [isCollapsed]="isCollapsed"
        >
        </na-sidebar-menu-item>
      </ng-template>
    </ul>
  `,
  styleUrls: ['./na-sidebar.component.scss'],
})
export class NaSidebarComponent implements OnInit {

  @Input() isCollapsed: boolean;
  menuItems: MenuItem[];
  appName = environment.appName;

  constructor(
    private naMenuService: NaMenuService
  ) { }

  ngOnInit() {
    this.naMenuService.menuItems
      .subscribe((menuItems: MenuItem[]) => this.menuItems = menuItems);
  }

  get menuMode() {
    return this.isCollapsed ? 'vertical' : 'inline';
  }

}
