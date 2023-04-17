import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitylistCreativeComponent } from './activitylist-creative.component';

describe('ActivitylistCreativeComponent', () => {
  let component: ActivitylistCreativeComponent;
  let fixture: ComponentFixture<ActivitylistCreativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitylistCreativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitylistCreativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
