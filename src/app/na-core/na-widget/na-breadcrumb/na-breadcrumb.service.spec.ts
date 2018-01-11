import { inject, TestBed } from '@angular/core/testing';
import { ActivatedRoute, PRIMARY_OUTLET, Router } from '@angular/router';
import { any } from 'codelyzer/util/function';

import { ActivatedRouteStub, RouterStub } from '../../../../testing/router-stubs';
import { NaBreadcrumbService, ROUTE_DATA_BREADCRUMB } from './na-breadcrumb.service';

/* tslint:disable:no-unused-variable */

describe('Service: NaBreadcrumb', () => {
  let service: NaBreadcrumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NaBreadcrumbService,
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
      ],
    });
  });

  beforeEach(inject([NaBreadcrumbService], (_service: NaBreadcrumbService) => {
    service = _service;
  }));

  describe('getBreadCrumbs', () => {
    it('basic usage', () => {
      const root = {
        children: [
          {
            outlet: PRIMARY_OUTLET,
            snapshot: {
              url: [{ path: 'level1' }],
              data: {
                [ROUTE_DATA_BREADCRUMB]: 'level1',
              },
            },
            children: [
              {
                outlet: PRIMARY_OUTLET,
                snapshot: {
                  url: [{ path: 'level1to1' }],
                  data: {
                    [ROUTE_DATA_BREADCRUMB]: 'level1to1',
                  },
                },
                children: <any[]>[],
              },
            ],
          },
        ],
      };
      const res = service.generateBreadcrumbs(root);
      expect(res).toEqual([
        { label: 'level1', params: undefined, url: '/level1' },
        { label: 'level1to1', params: undefined, url: '/level1/level1to1' },
      ]);
    });

    it('skip parent path', () => {
      const root = {
        children: [
          {
            outlet: PRIMARY_OUTLET,
            snapshot: {
              url: [{ path: 'level1' }],
            },
            children: [
              {
                outlet: PRIMARY_OUTLET,
                snapshot: {
                  url: [{ path: 'level1to1' }],
                  data: {
                    [ROUTE_DATA_BREADCRUMB]: 'level1to1',
                  },
                },
                children: <any[]>[],
              },
            ],
          },
        ],
      };
      const res = service.generateBreadcrumbs(root);
      expect(res).toEqual([
        { label: 'level1to1', params: undefined, url: '/level1/level1to1' },
      ]);
    });

    it('skip child path', () => {
      const root = {
        children: [
          {
            outlet: PRIMARY_OUTLET,
            snapshot: {
              url: [{ path: 'level1' }],
              data: {
                [ROUTE_DATA_BREADCRUMB]: 'level1',
              },
            },
            children: [
              {
                outlet: PRIMARY_OUTLET,
                snapshot: {
                  url: [{ path: 'level1to1' }],
                },
                children: <any[]>[],
              },
            ],
          },
        ],
      };
      const res = service.generateBreadcrumbs(root);
      expect(res).toEqual([
        { label: 'level1', params: undefined, url: '/level1' },
      ]);
    });

    it('with params', () => {
      const root = {
        children: [
          {
            outlet: PRIMARY_OUTLET,
            snapshot: {
              url: [{ path: 'level1' }],
              data: {
                [ROUTE_DATA_BREADCRUMB]: 'level1',
              },
              params: {
                foo: 'foo',
              },
            },
            children: [
              {
                outlet: PRIMARY_OUTLET,
                snapshot: {
                  url: [{ path: 'level1to1' }],
                  data: {
                    [ROUTE_DATA_BREADCRUMB]: 'level1to1',
                  },
                },
                children: <any[]>[],
              },
            ],
          },
        ],
      };
      const res = service.generateBreadcrumbs(root);
      expect(res).toEqual([
        { label: 'level1', params: { foo: 'foo' }, url: '/level1' },
        { label: 'level1to1', params: undefined, url: '/level1/level1to1' },
      ]);
    });
  });
});
