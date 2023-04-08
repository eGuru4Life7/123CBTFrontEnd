import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamineThoughts10Component } from './examine-thoughts10.component';

describe('ExamineThoughts10Component', () => {
  let component: ExamineThoughts10Component;
  let fixture: ComponentFixture<ExamineThoughts10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamineThoughts10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamineThoughts10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
