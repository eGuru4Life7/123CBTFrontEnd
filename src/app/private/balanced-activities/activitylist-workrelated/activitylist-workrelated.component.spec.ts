import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitylistWorkrelatedComponent } from './activitylist-workrelated.component';

describe('ActivitylistWorkrelatedComponent', () => {
  let component: ActivitylistWorkrelatedComponent;
  let fixture: ComponentFixture<ActivitylistWorkrelatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitylistWorkrelatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitylistWorkrelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
