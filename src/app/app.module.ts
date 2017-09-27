import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    NgProgressModule,
  ],
  providers: [
    Title,
    // loading bar interceptor
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
