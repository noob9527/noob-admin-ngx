import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { ModalComponent } from './modal/modal.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'button',
  },
  {
    path: 'button',
    component: ButtonComponent,
    data: {
      breadcrumb: 'Button',
    },
  },
  {
    path: 'icon',
    component: IconComponent,
    data: {
      breadcrumb: 'Icon',
    },
  },
  {
    path: 'modal',
    component: ModalComponent,
    data: {
      breadcrumb: 'Modal',
    },
  },
  {
    path: 'notification',
    component: NotificationComponent,
    data: {
      breadcrumb: 'Notification',
    },
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ButtonComponent,
    IconComponent,
    ModalComponent,
    NotificationComponent
  ],
})
export class ElementsModule { }
