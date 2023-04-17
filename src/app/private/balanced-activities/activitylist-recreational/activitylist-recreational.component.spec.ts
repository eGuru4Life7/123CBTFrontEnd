import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitylistRecreationalComponent } from './activitylist-recreational.component';

describe('ActivitylistRecreationalComponent', () => {
  let component: ActivitylistRecreationalComponent;
  let fixture: ComponentFixture<ActivitylistRecreationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitylistRecreationalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitylistRecreationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
