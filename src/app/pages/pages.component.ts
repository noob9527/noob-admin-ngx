import { NaMenuService } from '../core/na-core-widget/na-sidebar/na-menu.service';
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
        <app-na-page-top [(isCollapsed)]="isCollapsed"></app-na-page-top>
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
  styles: [`
    :host > nz-layout {
       height: 100%;
    }
    .main {
      margin: 24px;
    }
  `],
})
export class PagesComponent implements OnInit {

  isCollapsed = false;

  constructor(private naMenuService: NaMenuService) {
  }

  ngOnInit() {
    this.naMenuService.updateMenu(menuItems);
  }
}
