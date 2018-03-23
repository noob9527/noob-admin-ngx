import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table-toolbar',
  template: `
    <div class="table-toolbar">
      <div class="table-toolbar-left">
        <ng-template *ngIf="left" [ngTemplateOutlet]="left"></ng-template>
      </div>
      <div class="table-toolbar-right">
        <ng-template *ngIf="right" [ngTemplateOutlet]="right"></ng-template>
      </div>
    </div>
  `,
  styles: [`
    .table-toolbar {
      display: flex;
      justify-content: space-between;
    }

    :host ::ng-deep .ant-btn,
    :host ::ng-deep .ant-radio-group {
      margin-right: 8px;
      margin-bottom: 12px;
    }
  `]
})
export class TableToolbarComponent implements OnInit {

  @ContentChild('left') left: TemplateRef<void>;
  @ContentChild('right') right: TemplateRef<void>;

  constructor() {
  }

  ngOnInit() {
  }

}
