import { NgxPermissionsGuard } from 'ngx-permissions';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { AclComponent } from './acl.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { BazComponent } from './baz/baz.component';
import { QuxComponent } from './qux/qux.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
  {
    path: '',
    component: AclComponent,
    data: {
      breadcrumb: 'Acl',
    },
    children: [
      { path: '', redirectTo: 'manager' },
      {
        path: 'manager',
        component: ManagerComponent,
        data: {
          breadcrumb: 'Manager',
        },
      },
      {
        path: 'foo',
        component: FooComponent,
        data: {
          breadcrumb: 'Foo',
          permissions: {
            only: 'foo',
          },
        },
      },
      {
        path: 'bar',
        component: BarComponent,
        data: {
          breadcrumb: 'Bar',
          permissions: {
            only: 'bar',
          },
        },
      },
      {
        path: 'baz',
        component: BazComponent,
        data: {
          breadcrumb: 'Baz',
          permissions: {
            only: 'baz',
          },
        },
      },
      {
        path: 'qux',
        component: QuxComponent,
        data: {
          breadcrumb: 'Qux',
          permissions: {
            only: 'qux',
          },
        },
      },
    ]
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AclComponent,
    FooComponent,
    BarComponent,
    BazComponent,
    QuxComponent,
    ManagerComponent,
  ],
})
export class AclModule { }
