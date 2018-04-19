import { Component, OnInit } from '@angular/core';
import { NaSidebarService } from '../na-sidebar/na-sidebar.service';

@Component({
  selector: 'na-page-top',
  template: `
    <nz-header>
      <i
        class="anticon trigger"
        [class.anticon-menu-unfold]="_isCollapsed"
        [class.anticon-menu-fold]="!_isCollapsed"
        (click)="_toggleCollapsed()">
      </i>
      <div class="tool-bar">
        <ng-content></ng-content>
      </div>
    </nz-header>
  `,
  styleUrls: ['./na-page-top.component.less']
})
export class NaPageTopComponent implements OnInit {

  _isCollapsed = false;

  constructor(
    private naSidebarService: NaSidebarService,
  ) {
  }

  ngOnInit() {
    this.naSidebarService.$isCollapsed
      .subscribe(next => {
        this._isCollapsed = next;
      });
  }

  _toggleCollapsed() {
    this.naSidebarService.setCollapsed(!this._isCollapsed);
  }
}
