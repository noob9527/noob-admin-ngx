import { NaUser } from '../../na-service/na-user/na-user.domain';
import { NaUserService } from '../../na-service/na-user/na-user.service';
import { Router } from '@angular/router';
import { NaAuthenticationService } from '../../na-service/na-authentication/na-authentication.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'na-page-top',
  template: `
    <nz-header>
      <i
        class="anticon trigger"
        [class.anticon-menu-fold]="!isCollapsed"
        [class.anticon-menu-unfold]="isCollapsed"
        (click)="toggleCollapsed()">
      </i>
      <div class="tool-bar">
        <ng-content></ng-content>
      </div>
    </nz-header>
  `,
  styleUrls: ['./na-page-top.component.less']
})
export class NaPageTopComponent implements OnInit {

  @Input() isCollapsed = false;
  @Output() isCollapsedChange = new EventEmitter<boolean>();

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedChange.emit(this.isCollapsed);
  }

  constructor() { }

  ngOnInit() {
  }

}
