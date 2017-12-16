import { InjectionToken } from '@angular/core';

export type Logger = Console;
export const Logger = new InjectionToken<Logger>('Logger Abstraction');

export const StorageService = new InjectionToken<Storage>('Storage Abstraction');
