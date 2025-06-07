import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityCalc } from './equity-calc';

describe('EquityCalc', () => {
  let component: EquityCalc;
  let fixture: ComponentFixture<EquityCalc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquityCalc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquityCalc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
