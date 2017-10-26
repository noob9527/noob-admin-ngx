import { AfterViewInit, Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ɵen as NzSubMenuComponent } from 'ng-zorro-antd';

import { ItemType, MenuItem } from '../menu-item.model';


@Component({
  selector: 'na-sidebar-menu-item',
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
        <ng-template
          *ngFor="let item of menuItem.children"
          [ngxPermissionsOnly]="item.data?.permissions?.only"
          [ngxPermissionsExcept]="item.data?.permissions?.except"
        >
          <na-sidebar-menu-item
            [level]="level + 1"
            [menuItem]="item"
            [isCollapsed]="isCollapsed"
          >
          </na-sidebar-menu-item>
        </ng-template>
      </ul>
    </li>
  `,
  styleUrls: ['./na-sidebar-menu-item.component.less'],
})
export class NaSidebarMenuItemComponent implements OnInit, AfterViewInit {

  itemTypes = ItemType;
  @Input() level = 1;
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
    // title of 1st level should be invisivle in Collapsed mode
    return !this.isCollapsed || this.level !== 1;
  }

  /**
   * fix nested menu issue
   * @see https://github.com/NG-ZORRO/ng-zorro-antd/issues/364
   */
  ngAfterViewInit() {
    if (this.subMenus.length) {
      this.subMenus
        .filter(x => x !== this)
        .forEach(menu => {
          setTimeout(() => {
            menu.syncNzSubMenusLevel();
          });
        });
    }
  }

  /**
   * fix nested menu issue
   * @see https://github.com/NG-ZORRO/ng-zorro-antd/issues/364
   */
  syncNzSubMenusLevel() {
    if (this.nzSubMenus.length) {
      this.nzSubMenus
        .forEach(menu => {
          menu.level = this.level;
        });
    }
  }

}

