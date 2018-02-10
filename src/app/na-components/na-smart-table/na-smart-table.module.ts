import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaSmartTableComponent } from './na-smart-table.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { NaSafeCallablePipe } from './na-safe-callable.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    NaSmartTableComponent,
    NaSafeCallablePipe,
  ],
  exports: [
    NaSmartTableComponent,
  ]
})
export class NaSmartTableModule {
}
