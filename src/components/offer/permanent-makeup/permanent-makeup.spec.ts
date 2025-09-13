import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentMakeup } from './permanent-makeup';

describe('PermanentMakeup', () => {
  let component: PermanentMakeup;
  let fixture: ComponentFixture<PermanentMakeup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermanentMakeup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermanentMakeup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
