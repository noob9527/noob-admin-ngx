import { ApplicationRef, enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { createNewHosts } from '@angularclass/hmr';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Observable } from 'rxjs/Observable';

if (environment.production) {
  enableProdMode();
}

if (module['hot']) {
  hmrBootstrap(module, bootstrap);
} else {
  bootstrap();
}

function bootstrap() {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(res => {
      const loadedClass = 'loaded';
      const preloader = document.getElementById('preloader');
      if (!preloader) return res;
      if (!preloader.classList.contains(loadedClass)) {
        preloader.classList.add(loadedClass);
      }
      Observable
        .fromEvent(preloader, 'transitionend')
        .race(Observable.timer(3000))
        .take(1)
        .toPromise()
        .then(() => preloader.remove());
      return res;
    });
}

function hmrBootstrap(module: any, bootstrapFn: () => Promise<NgModuleRef<any>>) {
  let ngModule: NgModuleRef<any>;
  module.hot.accept();
  bootstrapFn().then(mod => ngModule = mod);
  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const elements = appRef.components.map(c => c.location.nativeElement);
    const makeVisible = createNewHosts(elements);
    ngModule.destroy();
    makeVisible();
  });
}
