import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relation12Component } from './relation12.component';

describe('Relation12Component', () => {
  let component: Relation12Component;
  let fixture: ComponentFixture<Relation12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Relation12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relation12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
