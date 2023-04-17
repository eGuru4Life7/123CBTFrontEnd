import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteActivitiesComponent } from './write-activities.component';

describe('WriteActivitiesComponent', () => {
  let component: WriteActivitiesComponent;
  let fixture: ComponentFixture<WriteActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
