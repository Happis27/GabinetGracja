import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaserTherapy } from './laser-therapy';

describe('LaserTherapy', () => {
  let component: LaserTherapy;
  let fixture: ComponentFixture<LaserTherapy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaserTherapy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaserTherapy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
