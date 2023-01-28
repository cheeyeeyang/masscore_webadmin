import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicfundmoneyComponent } from './economicfundmoney.component';

describe('EconomicfundmoneyComponent', () => {
  let component: EconomicfundmoneyComponent;
  let fixture: ComponentFixture<EconomicfundmoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomicfundmoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomicfundmoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
