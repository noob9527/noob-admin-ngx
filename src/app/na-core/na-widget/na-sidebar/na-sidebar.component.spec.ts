import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs/Rx';

import { MenuItem } from './menu-item.model';
import { NaMenuService } from './na-menu.service';
import { NaSidebarComponent } from './na-sidebar.component';

/* tslint:disable:no-unused-variable */
describe('NaSidebarComponent', () => {
  let component: NaSidebarComponent;
  let fixture: ComponentFixture<NaSidebarComponent>;

  const naMenuServiceStub = {
    getMenuItems() {
      return new BehaviorSubject<MenuItem[]>([]);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        NaSidebarComponent,
      ],
      providers: [
        {
          provide: NaMenuService,
          useValue: naMenuServiceStub,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
