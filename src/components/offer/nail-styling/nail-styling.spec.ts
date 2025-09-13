import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NailStyling } from './nail-styling';

describe('NailStyling', () => {
  let component: NailStyling;
  let fixture: ComponentFixture<NailStyling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NailStyling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NailStyling);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
