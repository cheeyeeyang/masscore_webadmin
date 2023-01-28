import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentprojectreportComponent } from './investmentprojectreport.component';

describe('InvestmentprojectreportComponent', () => {
  let component: InvestmentprojectreportComponent;
  let fixture: ComponentFixture<InvestmentprojectreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentprojectreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentprojectreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
