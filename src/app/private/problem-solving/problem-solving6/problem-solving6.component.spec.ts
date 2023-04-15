import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSolving6Component } from './problem-solving6.component';

describe('ProblemSolving6Component', () => {
  let component: ProblemSolving6Component;
  let fixture: ComponentFixture<ProblemSolving6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemSolving6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemSolving6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
