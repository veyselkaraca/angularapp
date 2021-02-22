/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InternalServerComponent } from './internal-server.component';

describe('InternalServerComponent', () => {
  let component: InternalServerComponent;
  let fixture: ComponentFixture<InternalServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
