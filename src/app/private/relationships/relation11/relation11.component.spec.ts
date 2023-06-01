import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relation11Component } from './relation11.component';

describe('Relation11Component', () => {
  let component: Relation11Component;
  let fixture: ComponentFixture<Relation11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Relation11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relation11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
