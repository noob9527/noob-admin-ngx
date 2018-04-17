import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/Rx';

import { Breadcrumb, BreadcrumbMeta, SimpleRouteForTest } from './breadcrumb.model';

export const ROUTE_DATA_BREADCRUMB = 'breadcrumb';

@Injectable()
export class NaBreadcrumbService {

  breadcrumbs: BehaviorSubject<Breadcrumb[]>;
  prefixBreadcrumbs: Breadcrumb[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  onInit() {
    this.breadcrumbs = new BehaviorSubject(this.generateBreadcrumbs(this.activatedRoute.root));
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.generateBreadcrumbs(this.activatedRoute.root))
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
  generateBreadcrumbs(route: SimpleRouteForTest): Breadcrumb[] {
    const breadcrumbs: Breadcrumb[] = [];
    let url = '';
    let currentRoute = getValidChild(route);
    while (currentRoute && currentRoute.snapshot) {
      const routeUrl = currentRoute.snapshot.url
        .map(segment => segment.path)
        .join('/');
      if (routeUrl) url += `/${routeUrl}`;
      if (!currentRoute.snapshot.data || currentRoute.snapshot.data[ROUTE_DATA_BREADCRUMB] == null) {
        currentRoute = getValidChild(currentRoute);
        continue;
      }
      const breadcrumb = metaToBreadcrumb(
        currentRoute.snapshot.data[ROUTE_DATA_BREADCRUMB],
        url,
        currentRoute.snapshot.params,
      );
      // 如果路由配置 data { breadcrumb: false } 则返回空数组
      if (!breadcrumb) return [];
      addItemDistinct(
        breadcrumbs,
        breadcrumb
      );
      currentRoute = getValidChild(currentRoute);
    }
    return [...this.prefixBreadcrumbs, ...breadcrumbs];
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
 * 如果 meta 为false值则返回空
 * @param meta
 * @param url
 * @param params
 */
function metaToBreadcrumb(
  meta: BreadcrumbMeta | string | false,
  url: string,
  params?: Params,
): Maybe<Breadcrumb> {
  if (typeof meta === 'boolean' && !meta) return null;
  const param = typeof meta === 'string'
    ? { label: meta }
    : meta;
  return {
    ...param,
    url,
    params,
  };
}

function getValidChild(route: SimpleRouteForTest): SimpleRouteForTest | undefined {
  return route
    && route.children
    && route.children.find(e => e.outlet === PRIMARY_OUTLET);
}
