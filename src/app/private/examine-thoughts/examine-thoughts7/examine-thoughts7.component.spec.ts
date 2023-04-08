import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamineThoughts7Component } from './examine-thoughts7.component';

describe('ExamineThoughts7Component', () => {
  let component: ExamineThoughts7Component;
  let fixture: ComponentFixture<ExamineThoughts7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamineThoughts7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamineThoughts7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
