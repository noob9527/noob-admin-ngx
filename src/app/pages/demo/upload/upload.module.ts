import { NgModule } from '@angular/core';
import { UploadComponent } from './upload.component';
import { FileUploadModule } from 'ng2-file-upload';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    FileUploadModule,
  ],
  declarations: [
    UploadComponent
  ]
})
export class UploadModule {
}
