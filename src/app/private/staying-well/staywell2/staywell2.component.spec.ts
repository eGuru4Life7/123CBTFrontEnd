import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Staywell2Component } from './staywell2.component';

describe('Staywell2Component', () => {
  let component: Staywell2Component;
  let fixture: ComponentFixture<Staywell2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Staywell2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Staywell2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
