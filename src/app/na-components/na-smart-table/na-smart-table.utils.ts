import { RowAction } from './domain/action';
import { Cell, Column, isActionColumn, isValueColumn, RowImpl, Selector, ValueColumn } from './domain/row-column';
import { isTextColumnSearcher, SmartTableColumnSearcher } from './domain/searcher';

const EMPTY_CELL: Cell<any> = { type: 'none' };

export interface SearchFields {
  [index: string]: any;
}

export function genSearchFields(columns: Column<any>[]): SearchFields {
  return columns
    .filter(e => isValueColumn(e) && e.searcher && e.searcher.key)
    .map((e: ValueColumn<any>) => e.searcher!)
    .reduce((acc, curr: SmartTableColumnSearcher) => ({ ...acc, [curr.key]: curr.value }), {});
}

export function genColumns<T>(columns: Column<T>[]): Column<T>[] {
  const copy = [...columns];
  for (const col of copy) {
    if (!isValueColumn(col)) continue;
    if (!col.searcher) continue;

    const searcher = col.searcher;
    // default key
    if (!searcher.key) {
      const key = col.selector;
      if (typeof key !== 'string')
        throw new Error(`searcher of col:${col.label} doesn't have a valid key`);
      searcher.key = key;
    }
    // default placeholder
    if (isTextColumnSearcher(searcher)) {
      if (!searcher.placeholder) searcher.placeholder = col.label;
    }
  }
  return copy;
}

export function genRows<T>(items: T[], columns: Column<T>[]): RowImpl<T>[] {
  return items.map((e, rowIndex) => genRow(e, rowIndex, columns));
}

export function genRow<T>(item: T, rowIndex: number, columns: Column<T>[]): RowImpl<T> {
  return new RowImpl<T>(item, columns.map(e => genCell(item, rowIndex, e)));
}

function genCell<T>(item: T, rowIndex: number, column: Column<T>): Cell<T> {
  if (isValueColumn(column)) {
    return {
      type: 'value',
      value: select(item, column.selector)
    };
  } else if (isActionColumn(column)) {
    const actions = (safeCall(column.actions, column.actions, item, rowIndex) as RowAction<T>[])
      .filter(e => {
        if (!Array.isArray(e)) return true;
        return e.length;
      })
      .map(e => {
        return (Array.isArray(e) && e.length === 1) ? e[0] : e;
      });

    return {
      type: 'action',
      actions
    };
  }
  return EMPTY_CELL;
}

function safeCall(callable: any, defaultValue: any, ...args: any[]) {
  return typeof callable === 'function'
    ? callable(...args)
    : defaultValue;
}

function select<T>(input: T, selector: Selector<T>) {
  if (typeof  selector === 'string') return input[selector];
  return (selector as (data: T) => any)(input);
}

