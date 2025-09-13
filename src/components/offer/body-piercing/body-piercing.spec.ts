import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPiercing } from './body-piercing';

describe('BodyPiercing', () => {
  let component: BodyPiercing;
  let fixture: ComponentFixture<BodyPiercing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyPiercing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyPiercing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
