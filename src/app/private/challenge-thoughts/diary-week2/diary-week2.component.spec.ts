import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryWeek2Component } from './diary-week2.component';

describe('DiaryWeek2Component', () => {
  let component: DiaryWeek2Component;
  let fixture: ComponentFixture<DiaryWeek2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryWeek2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaryWeek2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
