import { NaNotice, NaNoticeType } from '../na-core/na-widget/na-notice-center/na-notice-center.domain';
import { NoticeService } from '../core/notice/notice.service';
import { NaMenuService } from '../na-core/na-widget/na-sidebar/na-menu.service';
import { Component, OnInit } from '@angular/core';
import menuItems from './pages.menu';
import { NaSidebarService } from '../na-core/na-widget/na-sidebar/na-sidebar.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.less'],
})
export class PagesComponent implements OnInit {

  _isCollapsed = false;

  NaNoticeType = NaNoticeType;

  /**
   * 目前通过di调用对应服务的构造函数来完成一些初始化逻辑
   * I do know it's not elegant
   * but I've not found a better way yet
   * @param naMenuService
   * @param noticeService
   */
  constructor(
    private naMenuService: NaMenuService,
    private naSidebarService: NaSidebarService,
    private noticeService: NoticeService,
  ) {
  }

  ngOnInit() {
    this.naMenuService.updateMenu(menuItems);
    this.noticeService.fetchNoticeCount();
    // this.noticeService.fetchNoticeCount();
    this.naSidebarService.$isCollapsed
      .subscribe(next => {
        this._isCollapsed = next;
      });
  }

  _handleCollapsedChange(currentValue: boolean) {
    this.naSidebarService.setCollapsed(currentValue);
  }

  handleNoticePopupVisibleChange(isVisible: boolean) {
    if (isVisible) {
      this.noticeService.fetchNotices();
    }
  }

  handleNoticeClear(noticeType: NaNoticeType) {
    console.log(`${noticeType} clear`);
  }
  handleNoticeClick(notice: NaNotice, noticeType: NaNoticeType) {
    console.log(notice);
  }
}
