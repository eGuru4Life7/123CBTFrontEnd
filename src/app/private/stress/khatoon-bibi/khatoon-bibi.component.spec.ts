import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhatoonBibiComponent } from './khatoon-bibi.component';

describe('KhatoonBibiComponent', () => {
  let component: KhatoonBibiComponent;
  let fixture: ComponentFixture<KhatoonBibiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhatoonBibiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhatoonBibiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
