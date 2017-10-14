import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Injector, NgModule, NgModuleFactory, SystemJsNgModuleLoader } from '@angular/core';
import { provideRoutes } from '@angular/router';

import { environment } from '../../environments/environment';
import { NaUtilsModule } from './na-utils/na-utils.module';
import { NaServiceModule } from './na-service/na-service.module';
import { NaWidgetModule } from './na-widget/na-widget.module';


/**
 * CoreModule includes providers
 * for the singleton services you load when the application starts.
 * single use components/classes can also go in the CoreModule
 * Good candidates are global components that go in your main AppComponent
 * For example, if your app has one global header component
 * you can add the code for HeaderComponent in CoreModule
 * NOTE: Import CoreModule in the root AppModule only
 * Never import CoreModule in any other module
 */
@NgModule({
  imports: [
    HttpClientModule,
    NaUtilsModule,
    NaServiceModule,
    NaWidgetModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
  ],
  exports: [
    NaWidgetModule,
  ],
  providers: [
    SystemJsNgModuleLoader,
    provideRoutes([
      {
        path: 'LAZY/development',
        loadChildren: './development/development.module#DevelopmentModule'
      },
    ]),
  ],
})
export class NaCoreModule {
  constructor(
    private loader: SystemJsNgModuleLoader,
    private injector: Injector,
  ) {
    // 如果不是生产环境，加载 development 模块
    if (!environment.production) {
      this.loader.load('./development/development.module#DevelopmentModule')
        .then((factory: NgModuleFactory<any>) => {
          factory.create(this.injector);
        });
    }
  }
}
