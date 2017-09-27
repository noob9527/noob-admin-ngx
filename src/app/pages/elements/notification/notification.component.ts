import { NzMessageService, NzNotificationService } from 'ng-zorro-antd';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent implements OnInit {

  message = {
    type: 'info',
    content: 'This is a message!',
    duration: 2
  };
  marks = {
    0: 'naver'
  };
  notify = {
    type: 'info',
    title: 'Notification Title',
    content: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    duration: 5
  };

  constructor(
    private msg: NzMessageService,
    private ntf: NzNotificationService,
  ) { }

  ngOnInit() {
  }

  createMessage() {
    this.msg.create(
      this.message.type,
      this.message.content,
      {
        nzDuration: this.message.duration * 1000
      }
    );
  }

  clearMessage() {
    this.msg.remove();
  }

  createNotify() {
    this.ntf.create(
      this.notify.type,
      this.notify.title,
      this.notify.content,
      {
        nzDuration: this.notify.duration * 1000
      }
    );
  }

  clearNotify() {
    this.ntf.remove();
  }
}
