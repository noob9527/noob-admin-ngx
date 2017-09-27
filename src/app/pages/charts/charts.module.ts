import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule as ChartJsModule } from 'ng2-charts/ng2-charts';

import { SharedModule } from '../../shared/shared.module';
import { ChartjsComponent } from './chartjs/chartjs.component';

const routes: Routes = [
  { path: '', redirectTo: 'chartjs' },
  {
    path: 'chartjs',
    component: ChartjsComponent,
    data: {
      breadcrumb: 'Chartjs',
    },
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ChartJsModule,
  ],
  declarations: [
    ChartjsComponent,
  ],
})
export class ChartsModule { }
