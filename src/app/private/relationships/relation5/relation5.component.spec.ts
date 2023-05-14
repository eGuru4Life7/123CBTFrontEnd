import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relation5Component } from './relation5.component';

describe('Relation5Component', () => {
  let component: Relation5Component;
  let fixture: ComponentFixture<Relation5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Relation5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relation5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
