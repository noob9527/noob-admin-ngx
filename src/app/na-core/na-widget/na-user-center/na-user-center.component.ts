import { NaAuthenticationService } from '../../na-service/na-authentication/na-authentication.service';
import { NaUserService } from '../../na-service/na-user/na-user.service';
import { Router } from '@angular/router';
import { NaUser } from '../../na-service/na-user/na-user.domain';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'na-user-center',
  template: `
    <nz-dropdown [nzPlacement]="'bottomRight'">
        <a nz-dropdown>
          <nz-avatar
            [nzSize]="'small'"
            [nzSrc]="currentUser?.naAvatar"
            [nzIcon]="'user'"
          >
          </nz-avatar>
          {{currentUser?.naAccount}}
        </a>
        <ul class="tool-bar-menu" nz-menu>
          <li nz-menu-item nzDisable="true"><i class="anticon anticon-user"></i>profile</li>
          <li nz-menu-item nzDisable="true"><i class="anticon anticon-setting"></i>setting</li>
          <li nz-menu-divider></li>
          <li nz-menu-item (click)="signOut()"><i class="anticon anticon-logout"></i>sign out</li>
        </ul>
    </nz-dropdown>
  `,
  styleUrls: ['./na-user-center.component.less']
})
export class NaUserCenterComponent implements OnInit {

  currentUser: Maybe<NaUser> = null;

  constructor(
    private authenticationService: NaAuthenticationService,
    private naUserService: NaUserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.naUserService.currentUser
      .subscribe(res => this.currentUser = res);
  }

  signOut() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
