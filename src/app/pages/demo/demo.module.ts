import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { UploadModule } from './upload/upload.module';
import { CropperComponent } from './cropper/cropper.component';
import { CropperModule } from './cropper/cropper.module';

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
      breadcrumb: 'Upload',
    }
  },
  {
    path: 'cropper',
    component: CropperComponent,
    data: {
      breadcrumb: 'Cropper',
    }
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    UploadModule,
    CropperModule,
  ],
  declarations: []
})
export class DemoModule {
}
