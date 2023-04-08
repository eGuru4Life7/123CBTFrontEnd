import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamineThoughts9Component } from './examine-thoughts9.component';

describe('ExamineThoughts9Component', () => {
  let component: ExamineThoughts9Component;
  let fixture: ComponentFixture<ExamineThoughts9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamineThoughts9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamineThoughts9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
