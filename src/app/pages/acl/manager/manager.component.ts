import { Component, OnInit } from '@angular/core';

import { NaAclService } from '../../../na-core/na-service/na-acl/na-acl.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
})
export class ManagerComponent implements OnInit {

  permissions: string[] = [];

  constructor(
    private naAclService: NaAclService,
  ) { }

  ngOnInit() {
    this.naAclService.userPermissions
      .subscribe(res => {
        this.permissions = res;
      });
  }

  removePermission(permisson: string) {
    const next = this.permissions
      .filter(e => e !== permisson);
    this.naAclService.next(next);
  }

  addPermission(form: any) {
    const { value } = form;
    if (!value.name) return;
    if (this.permissions.includes(value.name)) return;
    this.naAclService.next(this.permissions.concat(value.name));
    form.reset();
  }
}
