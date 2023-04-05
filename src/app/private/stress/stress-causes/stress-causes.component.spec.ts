import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StressCausesComponent } from './stress-causes.component';

describe('StressCausesComponent', () => {
  let component: StressCausesComponent;
  let fixture: ComponentFixture<StressCausesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StressCausesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StressCausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
