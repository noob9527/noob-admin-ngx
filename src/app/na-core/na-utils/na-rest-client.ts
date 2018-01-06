import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AbstractRestResource, RestRequestOptions, RestResponse } from './na-rest-request.domain';
import { Page, PageRequest } from './na-pagination.domain';

export interface IRestClient<T extends AbstractRestResource> {
  /**
   * find single resource
   * @param {number | string} id
   * @param options
   * @returns {Observable<T>}
   */
  get(id: number | string, options?: RestRequestOptions): Observable<T>;

  /**
   * find resource array
   * @param options
   * @returns {Observable<T[]>}
   */
  queryAll(options?: RestRequestOptions): Observable<T[]>;

  /**
   * find resource with pagination
   * @param {PageRequest} pageRequest
   * @param options
   * @returns {Observable<Page<T>>}
   */
  query(pageRequest: PageRequest, options?: RestRequestOptions): Observable<Page<T>>;

  /**
   * create single resource
   * @param {T} body
   * @param options
   * @returns {Observable<T>}
   */
  create(body: T, options?: RestRequestOptions): Observable<T>;

  /**
   * update single resource
   * @param {T} body
   * @param options
   * @returns {Observable<T>}
   */
  update(body: T, options?: RestRequestOptions): Observable<T>;

  /**
   * increment update single resource
   * @param {T} body
   * @param options
   * @returns {Observable<T>}
   */
  patch(body: T, options?: RestRequestOptions): Observable<T>;

  /**
   * delete single resource by id
   * @param {number | string} id
   * @param options
   * @returns {Observable<RestResponse>}
   */
  delete(id: number | string, options?: RestRequestOptions): Observable<RestResponse>;
}

const identity = (input: any) => input;

export class RestClient<T extends AbstractRestResource> implements IRestClient<T> {

  protected mapper: (dto: any) => T;

  constructor(
    protected http: HttpClient,
    protected resourceUrl: string,
    ResourceConstructor?: new (dto: any) => T,
    resourceFactory?: (dto: any) => T
  ) {
    if (ResourceConstructor) {
      this.mapper = (dto) => new ResourceConstructor(dto);
    } else if (resourceFactory) {
      this.mapper = resourceFactory;
    } else {
      this.mapper = identity;
    }
  }

  get(id: number | string, options?: RestRequestOptions): Observable<T> {
    return this.http
      .get<T>(`${this.resourceUrl}/${id}`, options)
      .map(this.mapper);
  }

  query(pageRequest: PageRequest, options?: RestRequestOptions): Observable<Page<T>> {
    return this.http
      .get<Page<T>>(this.resourceUrl, pageRequest.buildRequestOptions(options))
      .do(page => page.content = page.content.map(this.mapper));
  }

  queryAll(options?: RestRequestOptions): Observable<T[]> {
    return this.http
      .get<T[]>(this.resourceUrl, options)
      .map(arr => arr.map(this.mapper));
  }

  create(body: T, options?: RestRequestOptions): Observable<T> {
    return this.http.post<T>(this.resourceUrl, body, options)
      .map(this.mapper);
  }

  update(body: T, options?: RestRequestOptions): Observable<T> {
    return this.http.put<T>(`${this.resourceUrl}/${body.id}`, body, options)
      .map(this.mapper);
  }

  patch(body: T, options?: RestRequestOptions): Observable<T> {
    return this.http.patch<T>(`${this.resourceUrl}/${body.id}`, body, options)
      .map(this.mapper);
  }

  delete(id: number | string, options?: RestRequestOptions): Observable<RestResponse> {
    return this.http.delete<RestResponse>(`${this.resourceUrl}/${id}`, options);
  }

}

