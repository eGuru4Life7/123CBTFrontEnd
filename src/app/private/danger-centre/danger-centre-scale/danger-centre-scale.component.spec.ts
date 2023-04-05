import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerCentreScaleComponent } from './danger-centre-scale.component';

describe('DangerCentreScaleComponent', () => {
  let component: DangerCentreScaleComponent;
  let fixture: ComponentFixture<DangerCentreScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangerCentreScaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DangerCentreScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
