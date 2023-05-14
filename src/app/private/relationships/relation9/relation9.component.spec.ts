import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relation9Component } from './relation9.component';

describe('Relation9Component', () => {
  let component: Relation9Component;
  let fixture: ComponentFixture<Relation9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Relation9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relation9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
