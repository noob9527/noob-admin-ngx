import { AfterViewInit, Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ɵen as NzSubMenuComponent } from 'ng-zorro-antd';

import { ItemType, MenuItem } from '../MenuItem.domain';

@Component({
  selector: 'app-na-sidebar-menu-item',
  template: `
    <li nz-menu-item *ngIf="!hasSubmenu" [ngSwitch]="menuItem.itemType">
      <a
        [href]="menuItem.url"
        [target]="menuItem.target"
        *ngSwitchCase="itemTypes.Url"
      >
        <i *ngIf="menuItem.icon" class="{{ menuItem.icon }}"></i>
        <span *ngIf="isTitleVisible">
          {{menuItem.title}}
        </span>
      </a>
      <a
        [routerLink]="menuItem.paths"
        *ngSwitchCase="itemTypes.Route"
      >
        <i *ngIf="menuItem.icon" class="{{ menuItem.icon }}"></i>
        <span *ngIf="isTitleVisible">
          {{menuItem.title}}
        </span>
      </a>
    </li>
    <li nz-submenu *ngIf="hasSubmenu">
      <span title>
        <i *ngIf="menuItem.icon" class="{{ menuItem.icon }}"></i>
        <span *ngIf="isTitleVisible">
          {{menuItem.title}}
        </span>
      </span>
      <ul>
        <app-na-sidebar-menu-item
          [menuItem]="item"
          [isCollapsed]="isCollapsed"
          *ngFor="let item of menuItem.children"
        >
        </app-na-sidebar-menu-item>
      </ul>
    </li>
  `,
})
export class NaSidebarMenuItemComponent implements OnInit, AfterViewInit {

  itemTypes = ItemType;
  level = 1;
  @Input() isCollapsed: boolean;
  @Input() menuItem: MenuItem;
  @ViewChildren(NzSubMenuComponent) nzSubMenus: QueryList<NzSubMenuComponent>;
  @ViewChildren(NaSidebarMenuItemComponent) subMenus: QueryList<NaSidebarMenuItemComponent>;

  constructor() { }

  ngOnInit() {
  }

  get hasSubmenu() {
    return this.menuItem.itemType === ItemType.ParentRoute;
  }

  get isTitleVisible() {
    return !this.isCollapsed || this.level !== 1;
  }

  ngAfterViewInit() {
    if (this.subMenus.length) {
      this.subMenus
        .filter(x => x !== this)
        .forEach(menu => {
          setTimeout(() => {
            menu.level = this.level + 1;
            menu.syncNzSubMenusLevel();
          });
        });
    }
  }

  syncNzSubMenusLevel() {
    if (this.nzSubMenus.length) {
      this.nzSubMenus
        .forEach(menu => {
          menu.level = this.level;
        });
    }
  }

}

