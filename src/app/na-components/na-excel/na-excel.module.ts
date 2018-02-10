import { NgModule } from '@angular/core';
import { NaExcelService } from './na-excel.service';
import { NaExcelImportComponent } from './na-excel-import.component';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NaExcelExportComponent } from './na-excel-export.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ],
  declarations: [
    NaExcelImportComponent,
    NaExcelExportComponent,
  ],
  exports: [
    NaExcelImportComponent,
    NaExcelExportComponent,
  ],
  providers: [
    NaExcelService,
  ]
})
export class NaExcelModule {
}
