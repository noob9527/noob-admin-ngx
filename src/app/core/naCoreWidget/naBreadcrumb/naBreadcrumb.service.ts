import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

import { Breadcrumb, BreadcrumbMeta, SimpleRouteForTest } from './Breadcrumb.domain';

export const ROUTE_DATA_BREADCRUMB = 'breadcrumb';

@Injectable()
export class NaBreadcrumbService {

  breadcrumbs: BehaviorSubject<Breadcrumb[]>;
  prefixBreadcrumbs: Breadcrumb[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  onInit() {
    this.breadcrumbs = new BehaviorSubject(this.getBreadcrumbs(this.activatedRoute.root));
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        this.breadcrumbs.next(this.getBreadcrumbs(this.activatedRoute.root));
      });
  }

  setPrefixBreadcrumbs(breadcrumbs: Breadcrumb[]) {
    this.prefixBreadcrumbs = breadcrumbs;
  }

  getBreadcrumbs(route: SimpleRouteForTest): Breadcrumb[] {
    const breadcrumbs: Breadcrumb[] = [...this.prefixBreadcrumbs];
    let url = '';
    let currentRoute = getValidChild(route);
    while (currentRoute) {
      const routeUrl = currentRoute.snapshot.url
        .map(segment => segment.path)
        .join('/');
      if (routeUrl) url += `/${routeUrl}`;
      if (!currentRoute.snapshot.data || !currentRoute.snapshot.data[ROUTE_DATA_BREADCRUMB]) {
        currentRoute = getValidChild(currentRoute);
        continue;
      }
      addItemDistinct(
        breadcrumbs,
        metaToBreadcrumb(
          currentRoute.snapshot.data[ROUTE_DATA_BREADCRUMB],
          url,
          currentRoute.snapshot.params,
        ),
      );
      currentRoute = getValidChild(currentRoute);
    }
    return breadcrumbs;
  }

}

/**
 * 只添加label不重复的item
 * @param arr
 * @param item
 */
function addItemDistinct(arr: Breadcrumb[], item: Breadcrumb) {
  if (arr.some(e => e.label === item.label)) return;
  arr.push(item);
}

function metaToBreadcrumb(
  meta: BreadcrumbMeta | string,
  url: string,
  params: Params,
): Breadcrumb {
  const param = typeof meta === 'string'
    ? { label: meta }
    : meta;
  return {
    ...param,
    url,
    params,
  };
}

function getValidChild(route: SimpleRouteForTest): SimpleRouteForTest {
  return route
    && route.children
    && route.children.find(e => e.outlet === PRIMARY_OUTLET);
}
