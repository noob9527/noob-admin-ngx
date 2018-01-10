import { NgModule } from '@angular/core';
import { NaFooterToolbarModule } from './na-footer-toolbar/na-footer-toolbar.module';

@NgModule({
  imports: [
    NaFooterToolbarModule,
  ],
  exports: [
    NaFooterToolbarModule,
  ]
})
export class NaComponentsModule {
}
