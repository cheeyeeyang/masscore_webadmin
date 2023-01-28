import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendreportComponent } from './dividendreport.component';

describe('DividendreportComponent', () => {
  let component: DividendreportComponent;
  let fixture: ComponentFixture<DividendreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividendreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividendreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
