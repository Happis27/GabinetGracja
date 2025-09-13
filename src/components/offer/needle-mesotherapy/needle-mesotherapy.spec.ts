import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedleMesotherapy } from './needle-mesotherapy';

describe('NeedleMesotherapy', () => {
  let component: NeedleMesotherapy;
  let fixture: ComponentFixture<NeedleMesotherapy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeedleMesotherapy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeedleMesotherapy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
