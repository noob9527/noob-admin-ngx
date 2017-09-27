/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NaPageTopComponent } from './na-page-top.component';

describe('NaPageTopComponent', () => {
  let component: NaPageTopComponent;
  let fixture: ComponentFixture<NaPageTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaPageTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaPageTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
