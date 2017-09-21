export enum ItemType {
  ParentRoute, Route, Url,
}

export interface MenuItemMeta {
  path?: string;
  url?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  children?: MenuItemMeta[];
  title: string;
  icon?: string;
  order?: number;
  [index: string]: any;
}

export class MenuItem implements MenuItemMeta {

  path?: string;
  paths?: string[];
  url?: string;
  target?: '_blank' | '_self' | '_parent' | '_top' = '_blank';
  children?: MenuItemMeta[];
  title: string;
  icon?: string;
  order?: number;
  [index: string]: any;

  constructor(meta: MenuItemMeta) {
    Object.assign(this, meta);
    if (!this.url && !this.path) this.path = '';
  }

  get itemType(): ItemType {
    if (this.children) return ItemType.ParentRoute;
    if (this.url) return ItemType.Url;
    return ItemType.Route;
  }
}
