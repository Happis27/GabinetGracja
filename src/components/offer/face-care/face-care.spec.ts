import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceCare } from './face-care';

describe('FaceCare', () => {
  let component: FaceCare;
  let fixture: ComponentFixture<FaceCare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceCare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceCare);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
