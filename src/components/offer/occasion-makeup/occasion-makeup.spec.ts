import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccasionMakeup } from './occasion-makeup';

describe('OccasionMakeup', () => {
  let component: OccasionMakeup;
  let fixture: ComponentFixture<OccasionMakeup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OccasionMakeup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccasionMakeup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
