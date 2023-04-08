import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerCenterScaleComponent } from './danger-center-scale.component';

describe('DangerCenterScaleComponent', () => {
  let component: DangerCenterScaleComponent;
  let fixture: ComponentFixture<DangerCenterScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangerCenterScaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DangerCenterScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
