import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaFooterToolbarComponent } from './na-footer-toolbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NaFooterToolbarComponent,
  ],
  exports: [
    NaFooterToolbarComponent,
  ]
})
export class NaFooterToolbarModule {
}
