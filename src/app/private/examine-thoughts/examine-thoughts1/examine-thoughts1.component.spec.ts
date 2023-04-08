import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamineThoughts1Component } from './examine-thoughts1.component';

describe('ExamineThoughts1Component', () => {
  let component: ExamineThoughts1Component;
  let fixture: ComponentFixture<ExamineThoughts1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamineThoughts1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamineThoughts1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
