import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, SystemJsNgModuleLoader } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRoutes } from '@angular/router';
import { NgxPermissionsModule } from 'ngx-permissions';

import { developmentInitializer } from './na-initializer/development.initializer';
import { NaServiceModule } from './na-service/na-service.module';
import { NaWidgetModule } from './na-widget/na-widget.module';
import { defaultNaConfig, NA_CONFIG, NaConfig } from './na-config';


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
    NaServiceModule,
    NaWidgetModule,
    BrowserAnimationsModule,
    NgxPermissionsModule.forRoot(),
  ],
  exports: [
    NaWidgetModule,
  ],
})
export class NaCoreModule {
  static forRoot(config?: NaConfig): ModuleWithProviders {
    return {
      ngModule: NaCoreModule,
      providers: [
        SystemJsNgModuleLoader,
        provideRoutes([
          {
            path: 'LAZY/development',
            loadChildren: 'app/na-core/development/development.module#DevelopmentModule'
          },
        ]),
        developmentInitializer,
        {
          provide: NA_CONFIG,
          useValue: Object.assign({}, defaultNaConfig, config),
        }
      ],
    };
  }
}

