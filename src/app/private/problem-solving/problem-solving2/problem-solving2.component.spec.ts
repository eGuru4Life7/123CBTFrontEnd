import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSolving2Component } from './problem-solving2.component';

describe('ProblemSolving2Component', () => {
  let component: ProblemSolving2Component;
  let fixture: ComponentFixture<ProblemSolving2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemSolving2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemSolving2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
