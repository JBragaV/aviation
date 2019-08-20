import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InoutCarPage } from './inout-car.page';

describe('InoutCarPage', () => {
  let component: InoutCarPage;
  let fixture: ComponentFixture<InoutCarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InoutCarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InoutCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
