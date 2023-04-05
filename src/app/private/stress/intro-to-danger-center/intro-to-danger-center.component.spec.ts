import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroToDangerCenterComponent } from './intro-to-danger-center.component';

describe('IntroToDangerCenterComponent', () => {
  let component: IntroToDangerCenterComponent;
  let fixture: ComponentFixture<IntroToDangerCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroToDangerCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroToDangerCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
