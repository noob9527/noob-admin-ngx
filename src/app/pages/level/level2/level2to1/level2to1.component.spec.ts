/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Level2to1Component } from './level2to1.component';

describe('Level2to1Component', () => {
  let component: Level2to1Component;
  let fixture: ComponentFixture<Level2to1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level2to1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2to1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
