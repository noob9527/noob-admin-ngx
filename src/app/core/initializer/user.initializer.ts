import { APP_INITIALIZER, Injector, Provider } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';

export function initUser(injector: Injector) {
  return () => {
    const userService = injector.get(CurrentUserService);
    userService.init();
  };
}

export const userInitializer: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initUser,
  multi: true,
  deps: [Injector]
};
