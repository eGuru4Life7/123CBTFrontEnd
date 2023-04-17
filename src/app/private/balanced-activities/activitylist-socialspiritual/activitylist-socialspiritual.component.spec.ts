import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitylistSocialspiritualComponent } from './activitylist-socialspiritual.component';

describe('ActivitylistSocialspiritualComponent', () => {
  let component: ActivitylistSocialspiritualComponent;
  let fixture: ComponentFixture<ActivitylistSocialspiritualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitylistSocialspiritualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitylistSocialspiritualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
