import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparatusCosmetology } from './apparatus-cosmetology';

describe('ApparatusCosmetology', () => {
  let component: ApparatusCosmetology;
  let fixture: ComponentFixture<ApparatusCosmetology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApparatusCosmetology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApparatusCosmetology);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
