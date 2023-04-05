import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StressScaleComponent } from './stress-scale.component';

describe('StressScaleComponent', () => {
  let component: StressScaleComponent;
  let fixture: ComponentFixture<StressScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StressScaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StressScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
