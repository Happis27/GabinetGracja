import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carboxytherapy } from './carboxytherapy';

describe('Carboxytherapy', () => {
  let component: Carboxytherapy;
  let fixture: ComponentFixture<Carboxytherapy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carboxytherapy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carboxytherapy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
