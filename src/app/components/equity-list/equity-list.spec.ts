import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityList } from './equity-list';

describe('EquityList', () => {
  let component: EquityList;
  let fixture: ComponentFixture<EquityList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquityList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquityList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
