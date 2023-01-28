import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentprojectComponent } from './investmentproject.component';

describe('InvestmentprojectComponent', () => {
  let component: InvestmentprojectComponent;
  let fixture: ComponentFixture<InvestmentprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
