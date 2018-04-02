import { Component, EventEmitter, Inject, Injector, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NaSmartTableComponent } from '../../na-components/na-smart-table/na-smart-table.component';
import { SearchFields } from '../../na-components/na-smart-table/na-smart-table.utils';
import { ModalService } from '../../core/services/modal.service';
import { MessageService } from '../../core/services/message.service';
import { HttpParams } from '@angular/common/http';
import { AbstractRestResource } from '../../na-core/na-utils/na-rest-request.domain';
import { SpringPageRequest, toSpringParams } from '../../core/utils/spring-mvc.domain';
import { AbstractBaseService, canShowEditor } from '../../core/resource/base/abstract-base.service';
import { LOGGER, Logger } from '../../na-core/na-service/na-logger.provider';
import { Column } from '../../na-components/na-smart-table/domain/row-column';

@Component({
  selector: 'app-smart-table',
  template: `
    <na-smart-table
      [data]="subject.asObservable()"
      [columns]="columns"
      [total]="_total"
      [(searchFields)]="searchFields"
      (searchFieldsChange)="_handleSearch()"
      [(naPageSize)]="_pageSize"
      [(naPageIndex)]="_pageIndex"
      (naPageIndexChange)="retrieve()"
      (naPageSizeChange)="retrieve(true)"
    ></na-smart-table>
  `,
})
export class SmartTableComponent<T extends AbstractRestResource>
  implements OnInit, OnChanges {
  @Output() searchFieldsChange: EventEmitter<SearchFields> = new EventEmitter();

  subject = new BehaviorSubject<T[]>([]);

  @ViewChild(NaSmartTableComponent)
  table: NaSmartTableComponent<T>;

  @Input()
  columns: Column<T>[];
  @Input()
  service: AbstractBaseService<T>;
  @Input()
  searchFields: SearchFields = {};

  @Input()
  autoFetch = true;

  _total = 0;
  _loading = true;
  _pageSize = 10;
  _pageIndex = 1;

  private _dataSet: T[] = [];

  constructor(
    private modalService: ModalService,
    private injector: Injector,
    @Inject(LOGGER) private logger: Logger,
  ) {
  }

  // I have to get messageService dynamically since below issue
  // https://github.com/NG-ZORRO/ng-zorro-antd/issues/391
  // https://github.com/angular/angular/issues/20515
  get messageService(): MessageService {
    return this.injector.get(MessageService);
  }

  ngOnInit() {
    if (this.service == null)
      throw new Error('service property is required');
    if (this.autoFetch) {
      this.retrieve();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchFields) {
      if (!changes.searchFields.isFirstChange()) {
        this.retrieve(true);
      }
    }
  }

  _handleSearch() {
    this.searchFieldsChange.emit(this.searchFields);
    this.retrieve();
  }

  retrieve(resetPage = false) {
    if (resetPage) {
      this._pageIndex = 1;
    }
    this._fetchData(this._pageIndex, toSpringParams(this.searchFields));
  }

  _fetchData(pageIndex: number = 1, params?: HttpParams) {
    this._loading = true;
    this.service.query(
      SpringPageRequest.of(pageIndex, this._pageSize),
      { params },
    ).subscribe(page => {
      this._loading = false;
      this._dataSet = page.content;
      this.subject.next(this._dataSet);
      this._total = page.totalElements;
    });
  }

  remove(index: number) {
    const item = this._dataSet[index];
    if (!item) throw new Error(`index: ${index} out of range`);
    this.modalService
      .deleteConfirm()
      .then(() => this.service.delete(item.id).toPromise())
      .then(() => this.removeItem(index))
      .then(() => this.messageService.resolveHint());
  }

  addItem(item: T) {
    this._dataSet.push(item);
    this.subject.next(this._dataSet);
  }

  setItem(index: number, item: T) {
    this._dataSet.splice(index, 1, item);
    this.subject.next(this._dataSet);
  }

  removeItem(index: number) {
    this._dataSet.splice(index, 1);
    this.subject.next(this._dataSet);
  }

  import(data: T[]) {
    this.modalService
      .saveConfirm({ content: `确认要导入${data.length}条项目吗?` })
      .then(() => this.service.createMultiple(data).toPromise())
      .then(res => {
        this._dataSet = this._dataSet.concat(res);
        this.subject.next(this._dataSet);
        this.messageService.resolveHint(`成功导入${res.length}条项目`);
      });
  }

  export() {
    this.service.queryAll({
      params: toSpringParams(this.searchFields)
    }).subscribe(next => {
      this.table.export(next);
    });
  }

  showEditor(item?: T, index?: number) {
    if (!canShowEditor(this.service))
      throw new Error(`show editor is not allowed in service: ${this.service}`);
    const isNew = !item || item.isNew;
    this.service.showEditor(item)
      .then((res: T) => {
        if (isNew)
          this._dataSet.push(res);
        else
          this._dataSet.splice(index!, 1, res);
        this.subject.next(this._dataSet);
        this.messageService.resolveHint();
      });
  }

}
