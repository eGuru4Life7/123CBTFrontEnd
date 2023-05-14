import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Staywell4Component } from './staywell4.component';

describe('Staywell4Component', () => {
  let component: Staywell4Component;
  let fixture: ComponentFixture<Staywell4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Staywell4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Staywell4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
