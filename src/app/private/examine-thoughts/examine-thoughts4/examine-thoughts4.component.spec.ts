import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamineThoughts4Component } from './examine-thoughts4.component';

describe('ExamineThoughts4Component', () => {
  let component: ExamineThoughts4Component;
  let fixture: ComponentFixture<ExamineThoughts4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamineThoughts4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamineThoughts4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
