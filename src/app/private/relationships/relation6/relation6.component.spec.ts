import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relation6Component } from './relation6.component';

describe('Relation6Component', () => {
  let component: Relation6Component;
  let fixture: ComponentFixture<Relation6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Relation6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relation6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
