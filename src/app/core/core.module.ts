import { NaCoreModule } from './naCore/naCore.module';
import { CoreUtilsModule } from './coreUtils/coreUtils.module';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


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
})
export class CoreModule { }
