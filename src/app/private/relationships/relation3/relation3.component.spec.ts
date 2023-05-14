import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relation3Component } from './relation3.component';

describe('Relation3Component', () => {
  let component: Relation3Component;
  let fixture: ComponentFixture<Relation3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Relation3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relation3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
