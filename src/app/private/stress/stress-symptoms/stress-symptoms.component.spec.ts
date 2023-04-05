import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StressSymptomsComponent } from './stress-symptoms.component';

describe('StressSymptomsComponent', () => {
  let component: StressSymptomsComponent;
  let fixture: ComponentFixture<StressSymptomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StressSymptomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StressSymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
