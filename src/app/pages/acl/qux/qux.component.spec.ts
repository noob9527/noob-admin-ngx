/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuxComponent } from './qux.component';

describe('QuxComponent', () => {
  let component: QuxComponent;
  let fixture: ComponentFixture<QuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
