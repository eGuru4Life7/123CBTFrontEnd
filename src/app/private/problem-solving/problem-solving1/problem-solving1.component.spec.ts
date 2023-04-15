import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSolving1Component } from './problem-solving1.component';

describe('ProblemSolving1Component', () => {
  let component: ProblemSolving1Component;
  let fixture: ComponentFixture<ProblemSolving1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemSolving1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemSolving1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
