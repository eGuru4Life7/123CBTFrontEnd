import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSolving4Component } from './problem-solving4.component';

describe('ProblemSolving4Component', () => {
  let component: ProblemSolving4Component;
  let fixture: ComponentFixture<ProblemSolving4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemSolving4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemSolving4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
