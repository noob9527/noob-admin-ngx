import { BehaviorSubject } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { NaNoticeService } from '../../na-core/na-widget/na-notice-center/na-notice.service';
import { Notice } from './notice.domain';

@Injectable()
export class NoticeService {

  private isFetched = false;

  constructor(
    private http: HttpClient,
    private naNoticeService: NaNoticeService,
  ) {
  }

  retrieveNotices() {
    return this.http.get('/notices')
      .subscribe(res => {
        if (!Array.isArray(res)) return;
        const noticeList: Notice[] = res
          .map(Notice.createInstance)
          .filter((e) => e);
        this.naNoticeService.setCurrentNotices(noticeList);
      });
  }

  fetchNotices() {
    if (this.isFetched) return;
    this.isFetched = true;
    this.retrieveNotices();
  }

  fetchNoticeCount() {
    return this.http.get('/noticesCount')
      .subscribe((res: any) => {
        const { count } = res;
        this.naNoticeService.setCurrentCount(count);
        return count;
      });
  }


}
