import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamineThoughts6Component } from './examine-thoughts6.component';

describe('ExamineThoughts6Component', () => {
  let component: ExamineThoughts6Component;
  let fixture: ComponentFixture<ExamineThoughts6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamineThoughts6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamineThoughts6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
