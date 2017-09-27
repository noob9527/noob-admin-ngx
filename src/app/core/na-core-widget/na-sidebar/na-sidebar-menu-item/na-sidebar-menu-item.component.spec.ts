import { MenuItem } from '../menu-item.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterLinkStubDirective } from '../../../../../testing/router-stubs';
import { NaSidebarMenuItemComponent } from './na-sidebar-menu-item.component';

/* tslint:disable:no-unused-variable */

describe('NaSidebarMenuItemComponent', () => {
  let component: NaSidebarMenuItemComponent;
  let fixture: ComponentFixture<NaSidebarMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NaSidebarMenuItemComponent,
        RouterLinkStubDirective,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaSidebarMenuItemComponent);
    component = fixture.componentInstance;
    component.menuItem = new MenuItem({
      title: '',
      order: 0,
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
