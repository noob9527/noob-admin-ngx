import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

import { Breadcrumb, BreadcrumbMeta, SimpleRouteForTest } from './breadcrumb.model';

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
    this.breadcrumbs = new BehaviorSubject(this.generateBreadcurmbs(this.activatedRoute.root));
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(event => this.generateBreadcurmbs(this.activatedRoute.root))
      .subscribe(this.breadcrumbs);
  }

  /**
   * 设定预定义的前缀导航
   * @param breadcrumbs
   */
  setPrefixBreadcrumbs(breadcrumbs: Breadcrumb[]) {
    this.prefixBreadcrumbs = breadcrumbs;
  }

  /**
   * 根据当前路由信息生成面包屑导航
   * @param route
   */
  generateBreadcurmbs(route: SimpleRouteForTest): Breadcrumb[] {
    const breadcrumbs: Breadcrumb[] = [...this.prefixBreadcrumbs];
    let url = '';
    let currentRoute = getValidChild(route);
    while (currentRoute && currentRoute.snapshot) {
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

/**
 * 将面包屑元信息转化为面包屑对象
 * @param meta
 * @param url
 * @param params
 */
function metaToBreadcrumb(
  meta: BreadcrumbMeta | string,
  url: string,
  params?: Params,
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

function getValidChild(route: SimpleRouteForTest): SimpleRouteForTest|undefined {
  return route
    && route.children
    && route.children.find(e => e.outlet === PRIMARY_OUTLET);
}
