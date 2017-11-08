import { Component, ContentChild, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NaInformation, NaNotice } from '../na-notice-center.domain';

@Component({
  selector: 'na-notice-tab',
  templateUrl: './na-notice-tab.component.html',
  styleUrls: ['./na-notice-tab.component.less', './na-list.less']
})
export class NaNoticeTabComponent implements OnInit {

  @Input() list: NaNotice[] = [];
  @Input() title = 'Notice';
  @Input() emptyText: string;
  @Input() emptyImage: string;
  @Output() onClear = new EventEmitter();
  @Output() onClick = new EventEmitter<NaNotice>();

  constructor() { }

  ngOnInit() {
  }

  isReaded(notice: NaNotice): boolean {
    return !!(notice as NaInformation).naIsReaded;
  }

  handleClear() {
    this.onClear.emit();
  }

  handleClick(item: NaNotice) {
    this.onClick.emit(item);
  }
}
