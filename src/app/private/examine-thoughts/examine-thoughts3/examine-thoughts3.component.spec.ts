import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamineThoughts3Component } from './examine-thoughts3.component';

describe('ExamineThoughts3Component', () => {
  let component: ExamineThoughts3Component;
  let fixture: ComponentFixture<ExamineThoughts3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamineThoughts3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamineThoughts3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
