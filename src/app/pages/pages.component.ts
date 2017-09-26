import { NaMenuService } from '../core/naCoreWidget/naSidebar/naMenu.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import menuItems from './pages.menu';

@Component({
  selector: 'app-pages',
  template: `
    <nz-layout>
      <nz-sider nzCollapsible [(nzCollapsed)]="isCollapsed" [nzTrigger]="null">
        <app-na-sidebar [isCollapsed]="isCollapsed"></app-na-sidebar>
      </nz-sider>
      <nz-layout>
        <nz-header>
        <i
          class="anticon trigger"
          [class.anticon-menu-fold]="!isCollapsed"
          [class.anticon-menu-unfold]="isCollapsed"
          (click)="isCollapsed=!isCollapsed">
        </i>
        </nz-header>
        <nz-content>
          <app-na-content-top></app-na-content-top>
          <div class="main">
            <router-outlet></router-outlet>
          </div>
        </nz-content>
        <nz-footer>Noob-Admin ©2017</nz-footer>
      </nz-layout>
    </nz-layout>
    `,
  styles: [
    `
      :host > nz-layout {
        height: 100%;
      }
      nz-layout > nz-header {
        background-color: #fff;
        padding: 0;
      }
      .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 16px;
        cursor: pointer;
        transition: color .3s;
      }
      .main {
        margin: 24px;
      }
    `
  ]
})
export class PagesComponent implements OnInit {

  isCollapsed = false;

  constructor(private naMenuService: NaMenuService) {
  }

  ngOnInit() {
    this.naMenuService.updateMenu(menuItems);
  }
}
