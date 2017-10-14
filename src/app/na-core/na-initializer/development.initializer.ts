import { environment } from '../../../environments/environment';
import { APP_INITIALIZER, Injector, NgModuleFactory, Provider, SystemJsNgModuleLoader } from '@angular/core';

/**
 * angular compiler的bug, 这里必须导出函数
 * Error: Error encountered resolving symbol values statically.
 * Reference to a non-exported function
 */
export function loadDevelepmentModule(
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
  useFactory: loadDevelepmentModule,
  multi: true,
  deps: [SystemJsNgModuleLoader, Injector]
};

