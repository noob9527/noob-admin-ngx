import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { NaNoticeCenterComponent } from './na-notice-center.component';
import { NaNoticeMessageComponent } from './na-notice-message/na-notice-message.component';
import { NaNoticeNotificationComponent } from './na-notice-notification/na-notice-notification.component';
import { NaNoticeTabComponent } from './na-notice-tab/na-notice-tab.component';
import { NaNoticeTodoComponent } from './na-notice-todo/na-notice-todo.component';
import { NaNoticeService } from './na-notice.service';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ],
  declarations: [
    NaNoticeCenterComponent,
    NaNoticeTabComponent,
    NaNoticeNotificationComponent,
    NaNoticeMessageComponent,
    NaNoticeTodoComponent,
],
  exports: [
    NaNoticeCenterComponent,
    NaNoticeTabComponent,
    NaNoticeNotificationComponent,
    NaNoticeMessageComponent,
    NaNoticeTodoComponent,
  ],
  providers: [
    NaNoticeService,
  ],
})
export class NaNoticeCenterModule { }
