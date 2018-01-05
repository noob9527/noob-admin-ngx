import { Injectable } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { BehaviorSubject } from 'rxjs/Rx';

import { NaUserService } from '../na-user/na-user.service';

@Injectable()
export class NaAclService {

  private initPermissions = [] as string[];
  userPermissions = new BehaviorSubject<string[]>([]);

  constructor(
    private naUserService: NaUserService,
    private ngxPermissionService: NgxPermissionsService,
  ) {
  }

  /**
   * 初始化权限
   * @param permissions 应用所有可用的权限
   */
  initPermission(permissions: string[]) {
    this.initPermissions = permissions;

    this.naUserService.currentUser
      .filter(naUser => !!naUser)
      .map(naUser => naUser!.naPermissions)
      .subscribe(this.userPermissions);

    this.userPermissions.subscribe(res => {
      this.refreshPermission(res);
    });
  }

  /**
   * 手动更新用户当前权限
   * @param permissions
   */
  next(permissions: string[]) {
    this.userPermissions.next(permissions);
  }

  private refreshPermission(userPermissions: string[]) {
    this.ngxPermissionService.flushPermissions();
    this.ngxPermissionService
      .loadPermissions(this.initPermissions, (permissionName: string) => {
        return userPermissions.indexOf(permissionName) !== -1;
      });
  }

}
