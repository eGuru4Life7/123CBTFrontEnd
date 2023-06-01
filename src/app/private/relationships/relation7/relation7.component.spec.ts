import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relation7Component } from './relation7.component';

describe('Relation7Component', () => {
  let component: Relation7Component;
  let fixture: ComponentFixture<Relation7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Relation7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relation7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
