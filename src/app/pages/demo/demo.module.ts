import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { UploadModule } from './upload/upload.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'upload',
    pathMatch: 'full',
  },
  {
    path: 'upload',
    component: UploadComponent,
    data: {
      breadcrumb: 'upload',
    }
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    UploadModule,
  ],
  declarations: []
})
export class DemoModule {
}
