import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Staywell3Component } from './staywell3.component';

describe('Staywell3Component', () => {
  let component: Staywell3Component;
  let fixture: ComponentFixture<Staywell3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Staywell3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Staywell3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
