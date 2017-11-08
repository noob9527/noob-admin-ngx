import { NaMessage, NaNotice, NaNoticeType, NaNotification } from '../na-notice-center.domain';
import { NaNoticeService } from '../na-notice.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'na-notice-notification',
  template: `
    <na-notice-tab
      title="Notification"
      [list]="list"
      (onClick)="handleClick($event)"
      (onClear)="handleClear()"
    ></na-notice-tab>
  `,
  styles: []
})
export class NaNoticeNotificationComponent implements OnInit {

  list: NaNotification[] = [];
  @Output() onClear = new EventEmitter();
  @Output() onClick = new EventEmitter<NaMessage>();

  constructor(private naNoticeService: NaNoticeService) { }

  ngOnInit() {
    this.naNoticeService.currentNotices
      .subscribe((naNoticeList: NaNotice[]) => {
        this.list = <NaNotification[]>naNoticeList
          .filter(e => e.naNoticeType === NaNoticeType.Notification);
      });
  }

  handleClear() {
    this.onClear.emit();
  }

  handleClick(item: NaMessage) {
    this.onClick.emit(item);
  }


}
