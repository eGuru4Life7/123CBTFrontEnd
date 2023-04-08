import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamineThoughts2Component } from './examine-thoughts2.component';

describe('ExamineThoughts2Component', () => {
  let component: ExamineThoughts2Component;
  let fixture: ComponentFixture<ExamineThoughts2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamineThoughts2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamineThoughts2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
