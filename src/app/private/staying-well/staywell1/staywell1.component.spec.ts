import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Staywell1Component } from './staywell1.component';

describe('Staywell1Component', () => {
  let component: Staywell1Component;
  let fixture: ComponentFixture<Staywell1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Staywell1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Staywell1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
