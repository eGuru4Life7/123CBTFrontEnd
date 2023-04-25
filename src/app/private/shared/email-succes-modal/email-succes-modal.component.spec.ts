import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSuccesModalComponent } from './email-succes-modal.component';

describe('EmailSuccesModalComponent', () => {
  let component: EmailSuccesModalComponent;
  let fixture: ComponentFixture<EmailSuccesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailSuccesModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailSuccesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
