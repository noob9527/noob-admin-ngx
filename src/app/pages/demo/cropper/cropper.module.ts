import { NgModule } from '@angular/core';
import { CropperComponent } from './cropper.component';
import { SharedModule } from '../../../shared/shared.module';
import { ImageCropperModule } from 'ng2-img-cropper';

@NgModule({
  imports: [
    SharedModule,
    ImageCropperModule,
  ],
  declarations: [
    CropperComponent,
  ]
})
export class CropperModule { }
