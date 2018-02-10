import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Column, isValueColumn, RowImpl, ValueColumn } from './domain/row-column';
import { genColumns, genRows, genSearchFields, SearchFields } from './na-smart-table.utils';
import { SmartTableColumnSearcher } from './domain/searcher';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { NaExcelService } from '../na-excel/na-excel.service';

@Component({
  selector: 'na-smart-table',
  templateUrl: './na-smart-table.component.html',
  styleUrls: ['./na-smart-table.component.less']
})
export class NaSmartTableComponent<T> implements OnInit, OnDestroy {
  @Output() naPageSizeChange: EventEmitter<number> = new EventEmitter();
  @Output() naPageIndexChange: EventEmitter<number> = new EventEmitter();
  @Output() searchFieldsChange: EventEmitter<SearchFields> = new EventEmitter();

  private tableRow$: Subscription;

  @Input()
  naPageSize = 10;

  _searchFields: SearchFields = {};
  @Input()
  set searchFields(value: SearchFields) {
    this._searchFields = value;
  }

  _columns: Column<T>[] = [];
  @Input()
  set columns(value: Column<T>[]) {
    this._columns = genColumns(value);
  }

  _rows: RowImpl<T>[] = [];

  @Input()
  data: Observable<T[]>;

  // loading
  private _loading = false;
  @Input()
  get loading() {
    return this._loading;
  }
  set loading(value: boolean) {
    this._loading = value;
  }

  // total
  private _total = 0;
  @Input()
  get total() {
    return this._total;
  }
  set total(value: number) {
    this._total = value;
  }

  _handlePageIndexChange(index: number) {
    this.naPageIndexChange.emit(index);
  }
  _handlePageSizeChange(size: number) {
    this.naPageSizeChange.emit(size);
  }

  _handleSearch() {
    this._searchFields = genSearchFields(this._columns);
    this.searchFieldsChange.emit(this._searchFields);
  }

  _clearColumnSearcher(searcher: SmartTableColumnSearcher) {
    searcher.value = null;
    this._handleSearch();
  }

  export(data: T[]) {
    // if data isExportable, export directly
    if (data.length && this.naExcelService.isExportable(data[0])) {
      this.naExcelService.exportItems(data);
      return;
    }
    // fallback to using table columns
    const columns = this._columns
      .filter(e => isValueColumn(e)) as ValueColumn<T>[];
    const titles = columns.map(e => e.label);
    const rows = genRows(data, columns)
      .map(e => {
        return Array.from(e).map(c => c.value);
      });
    return this.naExcelService.export({
      sheets: [{ data: [titles, ...rows] }]
    });
  }

  constructor(
    private naExcelService: NaExcelService
  ) {
  }

  ngOnInit() {
    this.tableRow$ = this.data
      .map(next => genRows(next, this._columns))
      .subscribe(next => this._rows = next);
  }

  ngOnDestroy(): void {
    this.tableRow$.unsubscribe();
  }

}

