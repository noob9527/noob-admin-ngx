export type RowAction<T> = SingleAction<T> | SingleAction<T>[];
export type SingleAction<T> = BaseAction<T> | LinkAction<T> | CallbackAction<T>;

export interface BaseAction<T> {
  label: string;
}

export interface LinkAction<T> extends BaseAction<T> {
  routerLink?: RouterLink;
}

export interface CallbackAction<T> extends BaseAction<T> {
  callback?: Function;
}

type RouterLink = any[] | string;
