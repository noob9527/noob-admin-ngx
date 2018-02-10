import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'na-excel-export',
  template: `
    <button nz-button [nzType]="buttonType" (click)="_handleClick()">
      <i class="anticon anticon-download"></i>
      <span>{{label}}</span>
    </button>
  `
})
export class NaExcelExportComponent implements OnInit {

  @Input()
  label = 'EXCEL导出';
  @Input()
  buttonType = 'default';

  @Output()
  onExport: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  _handleClick() {
    this.onExport.emit();
  }

  ngOnInit() {
  }

}
