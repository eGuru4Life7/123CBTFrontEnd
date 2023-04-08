import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamineThoughts5Component } from './examine-thoughts5.component';

describe('ExamineThoughts5Component', () => {
  let component: ExamineThoughts5Component;
  let fixture: ComponentFixture<ExamineThoughts5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamineThoughts5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamineThoughts5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
