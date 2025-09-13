import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Podiatry } from './podiatry';

describe('Podiatry', () => {
  let component: Podiatry;
  let fixture: ComponentFixture<Podiatry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Podiatry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Podiatry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
