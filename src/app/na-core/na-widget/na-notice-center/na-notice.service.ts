import { BehaviorSubject } from 'rxjs/Rx';
import { NaNotice } from './na-notice-center.domain';
import { Injectable } from '@angular/core';

@Injectable()
export class NaNoticeService {

  currentNotices = new BehaviorSubject<NaNotice[]>([]);
  currentCount = new BehaviorSubject<number>(0);

  constructor() { }

  setCurrentCount(count: number) {
    this.currentCount.next(count);
  }

  setCurrentNotices(naNotices: NaNotice[]) {
    this.setCurrentCount(naNotices.length);
    this.currentNotices.next(naNotices);
  }

}
