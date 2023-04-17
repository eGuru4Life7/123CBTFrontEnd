import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStep2Component } from './first-step2.component';

describe('FirstStep2Component', () => {
  let component: FirstStep2Component;
  let fixture: ComponentFixture<FirstStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstStep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
