import { NaCoreModule } from './naCore/naCore.module';
import { provideRoutes } from '@angular/router';
import { environment } from '../../environments/environment';
import { CoreUtilsModule } from './coreUtils/coreUtils.module';
import { Injector, NgModule, NgModuleFactory, SystemJsNgModuleLoader } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';


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
    CoreUtilsModule,
    NaCoreModule,
  ],
  exports: [
  ],
  declarations: [],
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
export class CoreModule {
  constructor(
    private loader: SystemJsNgModuleLoader,
    private injector: Injector,
  ) {
    if (!environment.production) {
      this.loader.load('./development/development.module#DevelopmentModule')
        .then((factory: NgModuleFactory<any>) => {
          factory.create(this.injector);
        });
    }
  }
}
