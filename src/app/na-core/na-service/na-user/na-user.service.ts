import { NaUser } from './na-user.domain';
import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable()
export class NaUserService {

  currentUser = new BehaviorSubject<Maybe<NaUser>>(null);

  constructor(private ngxPermissionService: NgxPermissionsService) { }

  setCurrentUser(naUser: NaUser) {
    this.currentUser.next(naUser);
  }

}
