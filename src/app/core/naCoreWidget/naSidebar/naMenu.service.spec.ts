import { MenuItem, MenuItemMeta } from './MenuItem.domain';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NaMenuService } from './naMenu.service';

describe('Service: NaMenu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NaMenuService]
    });
  });

  it('should ...', inject([NaMenuService], (service: NaMenuService) => {
    expect(service).toBeTruthy();
  }));

  describe('convert', () => {
    let service: NaMenuService;

    beforeEach(() => {
      service = new NaMenuService();
    });

    it('convert simple menu', () => {
      const metas: MenuItemMeta[] = [
        {
          path: '',
          title: '',
        },
        {
          url: '',
          title: '',
        },
      ];
      const res = service.convert(metas);
      expect(res.length).toBe(2);
    });

    it('convert ParentRouteMenu', () => {
      const metas: MenuItemMeta[] = [
        {
          path: '',
          title: '',
          children: [{
            path: '',
            title: '',
          }],
        },
      ];
      const res = service.convert(metas);
      expect(res.length).toBe(1);
      expect(res[0].children[0].paths).toEqual(['/', '', '']);
    });

  });

});
