import { ColumnSearcher } from './searcher';
import { RowAction } from './action';

export type Column<T> = BaseColumn | ValueColumn<T> | ActionColumn<T>;

export type Selector<T> = (keyof T) | SelectorFn<T>;

export interface BaseColumn {
  label: string;
}

export interface ValueColumn<T> extends BaseColumn {
  selector: Selector<T>;
  searcher?: ColumnSearcher;
}

export interface ActionColumn<T> extends BaseColumn {
  actions: RowAction<T>[] | ((data: T, index: number) => RowAction<T>[]);
}

export function isValueColumn<T>(column: any): column is ValueColumn<T> {
  return column.selector;
}

export function isActionColumn<T>(column: any): column is ActionColumn<T> {
  return column.actions;
}

export interface Cell<T> {
  type: 'none' | 'value' | 'action';
  value?: any | null | undefined;
  actions?: RowAction<T>[];
}

export class RowImpl<T> implements Iterable<Cell<T>> {
  [Symbol.iterator](): Iterator<Cell<T>> {
    return this.cells[Symbol.iterator]();
  }
  constructor(
    public readonly originalData: T,
    private cells: Cell<T>[],
  ) {
  }
}

type SelectorFn<T> = (data: T) => any | null | undefined;

