import { environment } from '../../../../environments/environment';
import { MenuItem } from './MenuItem.domain';
import { NaMenuService } from './naMenu.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-na-sidebar',
  template: `
    <div class="logo">
      <img src="assets/image/logo.svg" alt="logo">
      <span>{{appName}}</span>
    </div>
    <ul nz-menu [nzMode]="menuMode" [nzTheme]="'dark'">
      <app-na-sidebar-menu-item
        [menuItem]="item"
        [isCollapsed]="isCollapsed"
        *ngFor="let item of menuItems"
      >
      </app-na-sidebar-menu-item>
    </ul>
  `,
  styleUrls: ['./naSidebar.component.scss'],
})
export class NaSidebarComponent implements OnInit {

  @Input() isCollapsed: boolean;
  menuItems: MenuItem[];
  appName = environment.appName;

  constructor(
    private naMenuService: NaMenuService
  ) { }

  ngOnInit() {
    this.naMenuService.getMenuItems()
      .subscribe(this.updateMenu);
  }

  updateMenu = (newMenuItems: MenuItem[]) => {
    this.menuItems = newMenuItems;
  }

  get menuMode() {
    return this.isCollapsed ? 'vertical' : 'inline';
  }

}
