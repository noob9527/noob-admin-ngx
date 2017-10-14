import { Router } from '@angular/router';
import { AuthenticationService } from '../../na-service/authentication/authentication.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-na-page-top',
  templateUrl: './na-page-top.component.html',
  styleUrls: ['./na-page-top.component.scss']
})
export class NaPageTopComponent implements OnInit {

  @Input() isCollapsed = false;
  @Output() isCollapsedChange = new EventEmitter<boolean>();

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedChange.emit(this.isCollapsed);
  }

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  signOut() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
