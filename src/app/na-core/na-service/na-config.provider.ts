import { InjectionToken, Provider } from '@angular/core';

export const NA_CONFIG = new InjectionToken<NaConfig>('Na Config');

export interface NaConfig {
  tokenKey: string;
  authorizationHeader: string;
  [index: string]: any;
}

export const naConfig: NaConfig = {
  tokenKey: 'token',
  authorizationHeader: 'Authorization',
};

export const NaConfigProvider: Provider = {
  provide: NA_CONFIG,
  useValue: naConfig,
};
