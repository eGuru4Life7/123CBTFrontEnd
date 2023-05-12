import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhealthythoughtsComponent } from './myhealthythoughts.component';

describe('MyhealthythoughtsComponent', () => {
  let component: MyhealthythoughtsComponent;
  let fixture: ComponentFixture<MyhealthythoughtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyhealthythoughtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyhealthythoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
