import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StressIntroComponent } from './stress-intro.component';

describe('StressIntroComponent', () => {
  let component: StressIntroComponent;
  let fixture: ComponentFixture<StressIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StressIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StressIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
