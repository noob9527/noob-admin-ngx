import { RestClient } from '../../../na-core/na-utils/na-rest-client';
import { AbstractResource } from '../../utils/rest-request.domain';
import { RestRequestOptions } from '../../../na-core/na-utils/na-rest-request.domain';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

export abstract class AbstractBaseService<T extends AbstractResource>
  extends RestClient<T> {

  // if options isPresent, merge header to options
  // else create new options with given headers
  private static mergeDefaultHeaders(defaultHeaders: HttpHeaders, options?: RestRequestOptions) {
    let headers = defaultHeaders;
    if (options && options.headers) {
      if (options.headers instanceof HttpHeaders) {
        const p = options.headers;
        headers = p.keys()
          .reduce((acc, key) => {
            const value = p.getAll(key);
            return value
              ? value.reduce((a, v) => a.append(key, v), acc)
              : acc;
          }, headers);
      } else {
        const p = options.headers;
        headers = Object.keys(p)
          .reduce((acc, key) => {
            const value = p[key];
            if (Array.isArray(value)) {
              return value.reduce((a, v) => a.append(key, v), acc);
            } else {
              return acc.append(key, value);
            }
          }, headers);
      }
    }
    return Object.assign({}, options, { headers });
  }

  createMultiple(body: T[], options?: RestRequestOptions): Observable<T[]> {
    const headers = new HttpHeaders()
      .append('multiple', String(true));
    const opts = AbstractBaseService.mergeDefaultHeaders(headers, options);
    return this.http.post<T[]>(this.resourceUrl, { list: body }, opts)
      .map(arr => arr.map(this.mapper));
  }

  queryAll(options?: RestRequestOptions): Observable<T[]> {
    const headers = new HttpHeaders()
      .append('pagination', String(false));
    const opts = AbstractBaseService.mergeDefaultHeaders(headers, options);
    return super.queryAll(opts);
  }

}

export interface CanShowEditor<T> {
  showEditor: (resource?: T) => Promise<T>;
}

export function canShowEditor<T extends AbstractResource>(service: any): service is CanShowEditor<T> {
  return typeof service.showEditor === 'function';
}

