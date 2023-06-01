import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relation8Component } from './relation8.component';

describe('Relation8Component', () => {
  let component: Relation8Component;
  let fixture: ComponentFixture<Relation8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Relation8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relation8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
