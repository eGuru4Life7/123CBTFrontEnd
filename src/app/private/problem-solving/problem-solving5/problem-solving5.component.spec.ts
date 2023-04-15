import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSolving5Component } from './problem-solving5.component';

describe('ProblemSolving5Component', () => {
  let component: ProblemSolving5Component;
  let fixture: ComponentFixture<ProblemSolving5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemSolving5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemSolving5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
