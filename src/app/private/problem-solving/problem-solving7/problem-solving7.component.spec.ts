import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSolving7Component } from './problem-solving7.component';

describe('ProblemSolving7Component', () => {
  let component: ProblemSolving7Component;
  let fixture: ComponentFixture<ProblemSolving7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemSolving7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemSolving7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
