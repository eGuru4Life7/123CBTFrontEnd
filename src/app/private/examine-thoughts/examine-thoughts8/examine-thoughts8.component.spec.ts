import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamineThoughts8Component } from './examine-thoughts8.component';

describe('ExamineThoughts8Component', () => {
  let component: ExamineThoughts8Component;
  let fixture: ComponentFixture<ExamineThoughts8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamineThoughts8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamineThoughts8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
