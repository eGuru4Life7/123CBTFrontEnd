import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relation2Component } from './relation2.component';

describe('Relation2Component', () => {
  let component: Relation2Component;
  let fixture: ComponentFixture<Relation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Relation2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
