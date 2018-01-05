import { HttpErrorResponse } from '@angular/common/http';
import * as _ from 'lodash';

export interface NaError {
  message: string;
  detail?: any;
}

export type HttpErrorAdapter = (error: HttpErrorResponse) => Maybe<NaError>;

export const defaultHttpErrorAdapter: HttpErrorAdapter = (error) => {
  if (error.error instanceof Error) {
    return error.error;
  }
  let message = errorExtractor(error.error, 'message');
  if (!message) message = error.message;
  const detail = errorExtractor(error.error, 'detail') || '';

  return { message, detail };

  /**
   * ex: errorExtractor({errorMessage:'foo'}, 'message') => 'foo'
   * @param err
   * @param {string} key
   * @returns {Maybe<string>}
   */
  function errorExtractor(err: any, key: string): Maybe<string> {
    if (!err) return null;
    const str = `error ${key}`;
    const res = err[key] || err[_.kebabCase(str)] || err[_.camelCase(str)];
    if (!res) return null;
    return res;
  }
};
