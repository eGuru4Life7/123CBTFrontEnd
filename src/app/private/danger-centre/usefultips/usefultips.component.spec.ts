import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefultipsComponent } from './usefultips.component';

describe('UsefultipsComponent', () => {
  let component: UsefultipsComponent;
  let fixture: ComponentFixture<UsefultipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsefultipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsefultipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
