import { NaUser } from '../../na-service/na-user/na-user.domain';
import { NaUserService } from '../../na-service/na-user/na-user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../na-service/authentication/authentication.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'na-page-top',
  templateUrl: './na-page-top.component.html',
  styleUrls: ['./na-page-top.component.scss']
})
export class NaPageTopComponent implements OnInit {

  @Input() isCollapsed = false;
  @Output() isCollapsedChange = new EventEmitter<boolean>();
  currentUser: NaUser = null;

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedChange.emit(this.isCollapsed);
  }

  constructor(
    private authenticationService: AuthenticationService,
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
