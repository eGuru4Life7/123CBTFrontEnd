import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgDirectiveComponent } from './img-directive.component';

describe('ImgDirectiveComponent', () => {
  let component: ImgDirectiveComponent;
  let fixture: ComponentFixture<ImgDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
