import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityForm } from './equity-form';

describe('EquityForm', () => {
  let component: EquityForm;
  let fixture: ComponentFixture<EquityForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquityForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquityForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
