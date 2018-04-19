import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NaSidebarService {
  private subject = new BehaviorSubject<boolean>(false);

  setCollapsed(collapsed: boolean) {
    this.subject.next(collapsed);
  }

  get isCollapsed() {
    return this.subject.getValue();
  }

  get $isCollapsed() {
    return this.subject.asObservable();
  }

}
