import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryWeek3Component } from './diary-week3.component';

describe('DiaryWeek3Component', () => {
  let component: DiaryWeek3Component;
  let fixture: ComponentFixture<DiaryWeek3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryWeek3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaryWeek3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
