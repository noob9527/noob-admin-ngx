import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'na-description-list-item',
  template: `
    <ng-template #tpl>
      <div class="term" *ngIf="_term || _termTpl">
        <ng-container *ngIf="_term; else _termTpl">{{_term}}</ng-container>
      </div>
      <div class="detail">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
})
export class NaDescriptionListItemComponent implements OnInit {

  _term = '';
  _termTpl: TemplateRef<any>;

  @Input()
  set term(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef)
      this._termTpl = value;
    else
      this._term = value;
  }

  @ViewChild('tpl') tpl: TemplateRef<any>;

  ngOnInit() {
  }

}
