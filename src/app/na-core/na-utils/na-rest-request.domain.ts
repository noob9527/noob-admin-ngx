import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface RestRequestOptions {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

export interface RestResponse {
  readonly errorCode: number;
  readonly errorMessage: string;
  readonly errorDetail?: any;
}

export abstract class AbstractRestResource {

  constructor(dto?: any) {
    Object.assign(this, dto);
  }

  abstract get id(): any;

  get isNew() {
    return this.id == null;
  }

  copy(
    patch?: object | ((resource: this) => void)
  ) {
    const constructor =
      this.constructor as (new (dto: any) => AbstractRestResource);
    const res = new constructor(this) as this;
    if (typeof patch === 'function') {
      patch(res);
    } else if (patch) {
      Object.assign(res, patch);
    }
    return res;
  }
}
