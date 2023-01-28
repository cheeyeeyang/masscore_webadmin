import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidatedreportComponent } from './consolidatedreport.component';

describe('ConsolidatedreportComponent', () => {
  let component: ConsolidatedreportComponent;
  let fixture: ComponentFixture<ConsolidatedreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsolidatedreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsolidatedreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
