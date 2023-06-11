import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevNextButtonComponent } from './prev-next-button.component';

describe('PrevNextButtonComponent', () => {
  let component: PrevNextButtonComponent;
  let fixture: ComponentFixture<PrevNextButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevNextButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevNextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
