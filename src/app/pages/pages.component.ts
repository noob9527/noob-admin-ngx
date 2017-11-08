import { NaNotice, NaNoticeType } from '../na-core/na-widget/na-notice-center/na-notice-center.domain';
import { NoticeService } from '../core/notice/notice.service';
import { NaAclService } from '../na-core/na-service/na-acl/na-acl.service';
import { UserService } from '../core/user/user.service';
import { NaMenuService } from '../na-core/na-widget/na-sidebar/na-menu.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import menuItems from './pages.menu';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.less'],
})
export class PagesComponent implements OnInit {

  isCollapsed = false;
  NaNoticeType = NaNoticeType;

  /**
   * 目前通过di调用对应服务的构造函数来完成一些初始化逻辑
   * I do know it's not elegant
   * but I've not found a better way yet
   * @param naMenuService
   * @param userService
   * @param naAclService
   * @param noticeService
   */
  constructor(
    private naMenuService: NaMenuService,
    private noticeService: NoticeService,
    userService: UserService,
    naAclService: NaAclService,
  ) {
  }

  ngOnInit() {
    this.naMenuService.updateMenu(menuItems);
    this.noticeService.fetchNoticeCount();
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
