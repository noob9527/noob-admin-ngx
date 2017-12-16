import { InjectionToken, Provider } from '@angular/core';

export type Logger = Console;
export const LOGGER = new InjectionToken<Logger>('Logger Abstraction');

export const NaLoggerProvider: Provider = {
  provide: LOGGER,
  useValue: console,
};
