import { Params } from '@angular/router';

export interface BreadcrumbMeta {
  label: string;
  abstract?: boolean;
}

export interface Breadcrumb {
  label: string;
  params?: Params;
  url: string;
  abstract?: boolean;
}

export interface SimpleUrl {
  path: string;
}

export interface SimpleRouteForTest {
  outlet?: string;
  children: SimpleRouteForTest[];
  snapshot?: {
    url: SimpleUrl[],
    data?: {
      [index: string]: any,
    },
    params?: Params,
  };
}
