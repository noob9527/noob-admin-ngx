import { RouterLinkStubDirective } from '../../../../../testing/router-stubs';
import { MenuItem } from '../MenuItem.domain';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NaSidebarMenuItemComponent } from './naSidebarMenuItem.component';

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
