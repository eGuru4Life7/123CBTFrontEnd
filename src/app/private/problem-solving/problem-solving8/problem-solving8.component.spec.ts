import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSolving8Component } from './problem-solving8.component';

describe('ProblemSolving8Component', () => {
  let component: ProblemSolving8Component;
  let fixture: ComponentFixture<ProblemSolving8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemSolving8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemSolving8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
