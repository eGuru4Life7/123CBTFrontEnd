import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepadviceComponent } from './sleepadvice.component';

describe('SleepadviceComponent', () => {
  let component: SleepadviceComponent;
  let fixture: ComponentFixture<SleepadviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SleepadviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SleepadviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
