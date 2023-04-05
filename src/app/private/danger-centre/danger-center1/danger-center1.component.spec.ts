import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerCenter1Component } from './danger-center1.component';

describe('DangerCenter1Component', () => {
  let component: DangerCenter1Component;
  let fixture: ComponentFixture<DangerCenter1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangerCenter1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DangerCenter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
