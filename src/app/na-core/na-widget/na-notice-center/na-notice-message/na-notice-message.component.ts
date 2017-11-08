import { NaMessage, NaNotice, NaNoticeType } from '../na-notice-center.domain';
import { NaNoticeService } from '../na-notice.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'na-notice-message',
  template: `
    <na-notice-tab
      title="Message"
      [list]="list"
      (onClick)="handleClick($event)"
      (onClear)="handleClear()"
    ></na-notice-tab>
  `,
  styles: []
})
export class NaNoticeMessageComponent implements OnInit {

  list: NaMessage[] = [];
  @Output() onClear = new EventEmitter();
  @Output() onClick = new EventEmitter<NaMessage>();

  constructor(private naNoticeService: NaNoticeService) { }

  ngOnInit() {
    this.naNoticeService.currentNotices
      .subscribe((naNoticeList: NaNotice[]) => {
        this.list = <NaMessage[]>naNoticeList
          .filter(e => e.naNoticeType === NaNoticeType.Message);
      });
  }

  handleClear() {
    this.onClear.emit();
  }

  handleClick(item: NaMessage) {
    this.onClick.emit(item);
  }

}
