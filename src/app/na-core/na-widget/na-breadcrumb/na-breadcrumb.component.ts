import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Breadcrumb } from './breadcrumb.model';
import { NaBreadcrumbService } from './na-breadcrumb.service';


@Component({
  selector: 'na-breadcrumb',
  template: `
  <nz-breadcrumb>
    <nz-breadcrumb-item
      *ngFor="let item of breadcrumbs">
      <a *ngIf="!isAbstract(item)"
        [routerLink]="[item.url, item.params]"
      >
        <span>{{item.label}}</span>
      </a>
      <span *ngIf="isAbstract(item)">{{item.label}}</span>
    </nz-breadcrumb-item>
  </nz-breadcrumb>
  `,
})
export class NaBreadcrumbComponent implements OnInit {

  breadcrumbs: Breadcrumb[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private naBreadcrumbService: NaBreadcrumbService,
  ) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    this.naBreadcrumbService.onInit();
    this.naBreadcrumbService.breadcrumbs
      .subscribe(breadcrumbs => {
        this.breadcrumbs = breadcrumbs;
      });
  }

  isAbstract(item: Breadcrumb) {
    return item.abstract
      || item === this.breadcrumbs[this.breadcrumbs.length - 1]
  }
}
