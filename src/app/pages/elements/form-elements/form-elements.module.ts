import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { StandardFormComponent } from './standard-form/standard-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'standard', },
  {
    path: 'standard',
    component: StandardFormComponent,
    data: {
      breadcrumb: 'Standard Form',
    },
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    StandardFormComponent
  ],
})
export class FormElementsModule {
}
