import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerCenterScoreComponent } from './danger-center-score.component';

describe('DangerCenterScoreComponent', () => {
  let component: DangerCenterScoreComponent;
  let fixture: ComponentFixture<DangerCenterScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangerCenterScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DangerCenterScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
