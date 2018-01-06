import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicTableComponent } from './basic-table/basic-table.component';
import { DemoTableAjaxComponent } from './basic-table/demo-table-ajax/demo-table-ajax.component';
import { DemoTableBasicComponent } from './basic-table/demo-table-basic/demo-table-basic.component';
import { DemoTableEditableComponent } from './basic-table/demo-table-editable/demo-table-editable.component';
import { DemoTableExpandComponent } from './basic-table/demo-table-expand/demo-table-expand.component';
import { DemoTableSelectionComponent } from './basic-table/demo-table-selection/demo-table-selection.component';
import { DemoTableSortFilterComponent } from './basic-table/demo-table-sort-filter/demo-table-sort-filter.component';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'basic' },
  {
    path: 'basic',
    component: BasicTableComponent,
    data: {
      breadcrumb: 'Basic Table',
    },
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    BasicTableComponent,
    DemoTableBasicComponent,
    DemoTableSelectionComponent,
    DemoTableSortFilterComponent,
    DemoTableEditableComponent,
    DemoTableAjaxComponent,
    DemoTableExpandComponent,
  ],
})
export class TablesModule {
}
