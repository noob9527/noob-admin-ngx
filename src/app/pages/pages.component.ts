import { NaAclService } from '../na-core/na-service/na-acl/na-acl.service';
import { UserService } from '../core/user/user.service';
import { NaMenuService } from '../na-core/na-widget/na-sidebar/na-menu.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import menuItems from './pages.menu';

@Component({
  selector: 'app-pages',
  template: `
    <nz-layout>
      <nz-sider nzCollapsible [(nzCollapsed)]="isCollapsed" [nzTrigger]="null">
        <na-sidebar [isCollapsed]="isCollapsed"></na-sidebar>
      </nz-sider>
      <nz-layout>
        <na-page-top [(isCollapsed)]="isCollapsed"></na-page-top>
        <nz-content>
          <na-content-top></na-content-top>
          <div class="main">
            <router-outlet></router-outlet>
          </div>
        </nz-content>
        <nz-footer>Noob-Admin ©2017</nz-footer>
      </nz-layout>
    </nz-layout>
    `,
  styleUrls: ['./pages.component.less'],
})
export class PagesComponent implements OnInit {

  isCollapsed = false;

  constructor(
    private naMenuService: NaMenuService,
    userService: UserService,
    naAclService: NaAclService,
  ) {
  }

  ngOnInit() {
    this.naMenuService.updateMenu(menuItems);
  }
}
