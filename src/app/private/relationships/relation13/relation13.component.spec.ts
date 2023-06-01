import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relation13Component } from './relation13.component';

describe('Relation13Component', () => {
  let component: Relation13Component;
  let fixture: ComponentFixture<Relation13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Relation13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relation13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
