import { ItemType, MenuItem, MenuItemMeta } from './menu-item.model';
import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class NaMenuService {

  private menuItems = new BehaviorSubject<MenuItem[]>([]);

  constructor() { }

  updateMenu(metas: MenuItemMeta[]) {
    const menuItems = this.convert(metas);
    this.menuItems.next(menuItems);
  }

  convert(metas: MenuItemMeta[], parent?: MenuItemMeta): MenuItem[] {
    return metas
      .map(e => {
        return this.convertSingle(e, parent);
      })
      .sort((a, b) => {
        return a.order - b.order;
      });
  }

  private convertSingle(meta: MenuItemMeta, parent?: MenuItemMeta): MenuItem {
    const item = new MenuItem(meta);

    // level1 default icon
    if (!parent && !item.icon)
      item.icon = 'anticon anticon-question-circle';
    // default order
    if (!item.order) item.order = 0;

    if (item.itemType === ItemType.Url) return item;
    if (!parent) {
      item.paths = ['/', item.path];
    } else {
      item.paths = parent.paths.concat(item.path);
    }
    if (item.children) {
      item.children = this.convert(item.children, item);
    }
    return item;
  }

  getMenuItems(): BehaviorSubject<MenuItem[]> {
    return this.menuItems;
  }

}
