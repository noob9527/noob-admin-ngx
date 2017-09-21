/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Level2to2Component } from './level2to2.component';

describe('Level2to2Component', () => {
  let component: Level2to2Component;
  let fixture: ComponentFixture<Level2to2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level2to2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2to2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
