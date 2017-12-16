import { InjectionToken, Provider } from '@angular/core';

export const STORAGE = new InjectionToken<Storage>('Storage Abstraction');

export const NaStorageProvider: Provider = {
      provide: STORAGE,
      useValue: localStorage,
};
