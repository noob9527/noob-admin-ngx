import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaDescriptionListComponent } from './na-description-list.component';
import { NaDescriptionListItemComponent } from './na-description-list-item.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ],
  declarations: [
    NaDescriptionListComponent,
    NaDescriptionListItemComponent
  ],
  exports: [
    NaDescriptionListComponent,
    NaDescriptionListItemComponent
  ]
})
export class NaDescriptionListModule {
}
