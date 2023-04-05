import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerCenter2Component } from './danger-center2.component';

describe('DangerCenter2Component', () => {
  let component: DangerCenter2Component;
  let fixture: ComponentFixture<DangerCenter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangerCenter2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DangerCenter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
