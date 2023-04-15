import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSolving3Component } from './problem-solving3.component';

describe('ProblemSolving3Component', () => {
  let component: ProblemSolving3Component;
  let fixture: ComponentFixture<ProblemSolving3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemSolving3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemSolving3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
