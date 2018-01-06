import { RestRequestOptions } from './na-rest-request.domain';

export enum Direction {
  ASC = 'ASC', DESC = 'DESC'
}

export interface Order {
  direction: Direction;
  property: string;
  ignoreCase?: boolean;
}

export interface Sort {
  orders: Order[];
}

export interface Page<T> {
  totalElements: number;
  content: T[];
}

export interface PageRequest {
  readonly page: number;
  readonly size: number;
  readonly sort?: Sort;

  /**
   * this method described how to
   * apply PageRequest to existed request options
   * requestOptions + pageRequest => newRequestOptions
   * @param {RestRequestOptions} options
   * @returns {RestRequestOptions}
   */
  buildRequestOptions(options?: RestRequestOptions): RestRequestOptions;
}
