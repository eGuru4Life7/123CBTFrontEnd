import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodadviceComponent } from './foodadvice.component';

describe('FoodadviceComponent', () => {
  let component: FoodadviceComponent;
  let fixture: ComponentFixture<FoodadviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodadviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodadviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
