import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgxPermissionsModule } from 'ngx-permissions';

/**
 * SharedModule includes the components, directives, and pipes that you use everywhere in your app
 * This module should consist entirely of declarations, most of them exported
 * NOTE:The SharedModule should not have providers
 * NOTE:Nor should any of its imported or re-exported modules have providers
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NgxPermissionsModule,
],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NgxPermissionsModule,
  ],
  declarations: [],
})
export class SharedModule { }
