import { NaMessage, NaNotice, NaNoticeType, NaTodo } from '../na-notice-center.domain';
import { NaNoticeService } from '../na-notice.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'na-notice-todo',
  template: `
    <na-notice-tab
      title="Todo"
      [list]="list"
      (onClick)="handleClick($event)"
      (onClear)="handleClear()"
    ></na-notice-tab>
  `,
  styles: []
})
export class NaNoticeTodoComponent implements OnInit {

  list: NaTodo[] = [];
  @Output() onClear = new EventEmitter();
  @Output() onClick = new EventEmitter<NaMessage>();

  constructor(private naNoticeService: NaNoticeService) { }

  ngOnInit() {
    this.naNoticeService.currentNotices
      .subscribe((naNoticeList: NaNotice[]) => {
        this.list = <NaTodo[]>naNoticeList
          .filter(e => e.naNoticeType === NaNoticeType.Todo);
      });
  }

  handleClear() {
    this.onClear.emit();
  }

  handleClick(item: NaMessage) {
    this.onClick.emit(item);
  }

}
