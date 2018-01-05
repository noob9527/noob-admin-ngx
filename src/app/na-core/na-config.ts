import { InjectionToken } from '@angular/core';
import { defaultHttpErrorAdapter, HttpErrorAdapter } from './na-service/na-error-handler/na-error-handler.domain';

export const NA_CONFIG = new InjectionToken<NaConfig>('Na Config');

export interface NaConfig {
  tokenKey: string;
  authorizationHeader: string;
  httpErrorAdapter: HttpErrorAdapter;
  [index: string]: any;
}

export const defaultNaConfig: NaConfig = {
  tokenKey: 'token',
  authorizationHeader: 'Authorization',
  httpErrorAdapter: defaultHttpErrorAdapter,
};
