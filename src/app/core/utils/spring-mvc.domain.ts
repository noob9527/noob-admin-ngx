import { Page, PageRequest, Sort } from '../../na-core/na-utils/na-pagination.domain';
import { HttpParams } from '@angular/common/http';
import { RestRequestOptions } from '../../na-core/na-utils/na-rest-request.domain';

export interface SpringPage<T> extends Page<T> {
  totalElements: number;
  content: T[];
  size: number;
  number: number;
  last: boolean;
  totalPages: number;
  sort: Sort | null;
  first: boolean;
  numberOfElements: number;
}

export class SpringPageRequest implements PageRequest {
  static of(page = 0, size = 20, sort?: Sort) {
    return new SpringPageRequest(page, size, sort);
  }

  private constructor(
    public readonly page: number,
    public readonly size: number,
    public readonly sort?: Sort
  ) {
  }

  buildRequestOptions(options?: RestRequestOptions): RestRequestOptions {
    let params = this.toHttpParams();
    if (options && options.params) {
      if (options.params instanceof HttpParams) {
        const p = options.params;
        params = p.keys()
          .reduce((acc, key) => {
            const value = p.getAll(key);
            return value
              ? value.reduce((a, v) => a.append(key, v), acc)
              : acc;
          }, params);
      } else {
        const p = options.params;
        params = Object.keys(p)
          .reduce((acc, key) => {
            const value = p[key];
            if (Array.isArray(value)) {
              return value.reduce((a, v) => a.append(key, v), acc);
            } else {
              return acc.append(key, value);
            }
          }, params);
      }
    }
    return Object.assign({}, options, { params });
  }

  private toHttpParams() {
    const params = new HttpParams()
      .append('page', this.page.toString())
      .append('size', this.size.toString());
    if (this.sort) {
      this.sort.orders.forEach(order => {
        params.append('sort', `${order.property},${order.direction}`);
      });
    }
    return params;
  }
}

export function toSpringParams(searchFields?: { [index: string]: any }) {
  let params = new HttpParams();
  if (!searchFields) return params;
  Object.entries(searchFields)
    .filter(([key, value]) => value)
    .forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((e: any) => params = params.append(key, e));
      } else {
        params = params.append(key, value!);
      }
    });
  return params;
}
