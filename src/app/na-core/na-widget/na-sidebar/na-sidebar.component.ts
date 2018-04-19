import { Component, OnInit } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { MenuItem } from './menu-item.model';
import { NaMenuService } from './na-menu.service';
import { NaSidebarService } from './na-sidebar.service';

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
          [isCollapsed]="_isCollapsed"
        >
        </na-sidebar-menu-item>
      </ng-template>
    </ul>
  `,
  styleUrls: ['./na-sidebar.component.less'],
})
export class NaSidebarComponent implements OnInit {

  _isCollapsed: boolean;
  menuItems: MenuItem[];
  appName = environment.appName;

  constructor(
    private naMenuService: NaMenuService,
    private naSidebarService: NaSidebarService,
  ) {
  }

  ngOnInit() {
    this.naSidebarService.$isCollapsed
      .subscribe(next => {
        this._isCollapsed = next;
      });
    this.naMenuService.menuItems
      .subscribe((menuItems: MenuItem[]) => this.menuItems = menuItems);
  }

  get menuMode() {
    return this._isCollapsed ? 'vertical' : 'inline';
  }

}
