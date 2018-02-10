import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NaExcelService } from './na-excel.service';

@Component({
  selector: 'na-excel-import',
  template: `
    <button nz-button [nzType]="buttonType" (click)="_handleClick()">
      <i class="anticon anticon-upload"></i>
      <span>{{label}}</span>
      <input
        #fileSelector
        style="display: none"
        type="file"
        (change)="_fileSelected($event)"
      >
    </button>
  `,
})
export class NaExcelImportComponent implements OnInit {

  @Input()
  label = 'EXCEL导入';
  @Input()
  buttonType = 'default';
  @Input()
  targetType?: Function;

  @Output()
  onImport: EventEmitter<any> = new EventEmitter();

  @ViewChild('fileSelector')
  _fileSelector: ElementRef;

  constructor(
    private naExcelService: NaExcelService,
  ) {
  }

  _handleClick() {
    this._fileSelector.nativeElement.click();
  }

  _fileSelected(event: any) {
    if (!event.target.files.length) return;
    const file = event.target.files[0];
    const promise = this.targetType
      ? this.naExcelService.importItems(file, this.targetType)
      : this.naExcelService.import(file);
    (promise as Promise<any[]>).then(res => {
      this.onImport.emit(res);
      event.target.value = '';
    });
  }

  ngOnInit() {
  }

}
