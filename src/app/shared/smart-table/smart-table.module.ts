import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartTableComponent } from './smart-table.component';
import { NaSmartTableModule } from '../../na-components/na-smart-table/na-smart-table.module';

@NgModule({
  imports: [
    CommonModule,
    NaSmartTableModule,
  ],
  declarations: [
    SmartTableComponent,
  ],
  exports: [
    SmartTableComponent,
  ],
})
export class SmartTableModule {
}
