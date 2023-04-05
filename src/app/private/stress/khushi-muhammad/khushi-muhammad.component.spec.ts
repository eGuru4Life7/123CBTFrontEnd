import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhushiMuhammadComponent } from './khushi-muhammad.component';

describe('KhushiMuhammadComponent', () => {
  let component: KhushiMuhammadComponent;
  let fixture: ComponentFixture<KhushiMuhammadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhushiMuhammadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhushiMuhammadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
