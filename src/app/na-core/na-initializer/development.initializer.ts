import { environment } from '../../../environments/environment';
import { APP_INITIALIZER, Injector, NgModuleFactory, Provider, SystemJsNgModuleLoader } from '@angular/core';

/**
 * init development module
 */
export function loadDevelopmentModule(
  loader: SystemJsNgModuleLoader,
  injector: Injector,
): () => Promise<any> {
  return (): Promise<any> => environment.production
    ? Promise.resolve()
    : loader
      .load('app/na-core/development/development.module#DevelopmentModule')
      .then((factory: NgModuleFactory<any>) => {
        factory.create(injector);
      });
}

export const developmentInitializer: Provider = {
  provide: APP_INITIALIZER,
  useFactory: loadDevelopmentModule,
  multi: true,
  deps: [SystemJsNgModuleLoader, Injector]
};

