import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relation10Component } from './relation10.component';

describe('Relation10Component', () => {
  let component: Relation10Component;
  let fixture: ComponentFixture<Relation10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Relation10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relation10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
