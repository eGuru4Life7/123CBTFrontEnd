import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightScoreComponent } from './fight-score.component';

describe('FightScoreComponent', () => {
  let component: FightScoreComponent;
  let fixture: ComponentFixture<FightScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
