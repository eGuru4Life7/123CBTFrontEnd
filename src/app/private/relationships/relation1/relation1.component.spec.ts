import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relation1Component } from './relation1.component';

describe('Relation1Component', () => {
  let component: Relation1Component;
  let fixture: ComponentFixture<Relation1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Relation1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
