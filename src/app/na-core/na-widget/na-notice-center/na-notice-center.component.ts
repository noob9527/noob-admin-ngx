import { AfterContentInit, Component, ContentChild, EventEmitter, OnInit, Output } from '@angular/core';

import { NaNoticeMessageComponent } from './na-notice-message/na-notice-message.component';
import { NaNoticeNotificationComponent } from './na-notice-notification/na-notice-notification.component';
import { NaNoticeTodoComponent } from './na-notice-todo/na-notice-todo.component';
import { NaNoticeService } from './na-notice.service';

/**
 * 需要想办法允许添加自定义tab
 * 目前的实现非常不灵活
 */
@Component({
  selector: 'na-notice-center',
  templateUrl: './na-notice-center.component.html',
  styleUrls: ['./na-notice-center.component.less']
})
export class NaNoticeCenterComponent implements OnInit, AfterContentInit {

  count = 0;

  @ContentChild(NaNoticeNotificationComponent) notificationComponent: NaNoticeNotificationComponent;
  @ContentChild(NaNoticeMessageComponent) messageComponent: NaNoticeMessageComponent;
  @ContentChild(NaNoticeTodoComponent) todoComponent: NaNoticeTodoComponent;

  @Output() onPopupVisibleChange = new EventEmitter<boolean>();

  constructor(private naNoticeService: NaNoticeService) { }

  ngOnInit() {
    this.naNoticeService.currentCount
      .subscribe((count) => {
        this.count = count;
      });
  }

  ngAfterContentInit() {
  }

  visibleChange(isVisible: boolean) {
    this.onPopupVisibleChange.emit(isVisible);
  }


}
