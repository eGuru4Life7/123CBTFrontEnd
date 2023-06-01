import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relation4Component } from './relation4.component';

describe('Relation4Component', () => {
  let component: Relation4Component;
  let fixture: ComponentFixture<Relation4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Relation4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relation4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
