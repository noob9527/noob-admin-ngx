import { NaBreadcrumbService } from './na-breadcrumb.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { ActivatedRouteStub, RouterStub } from '../../../../testing/router-stubs';
import { NaBreadcrumbComponent } from './na-breadcrumb.component';

/* tslint:disable:no-unused-variable */
describe('NaBreadcrumbComponent', () => {
  let component: NaBreadcrumbComponent;
  let fixture: ComponentFixture<NaBreadcrumbComponent>;

  const routes = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        NaBreadcrumbComponent,
      ],
      providers: [
        NaBreadcrumbService,
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
