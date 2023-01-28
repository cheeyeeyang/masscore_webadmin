import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportgivingstatisticComponent } from './reportgivingstatistic.component';

describe('ReportgivingstatisticComponent', () => {
  let component: ReportgivingstatisticComponent;
  let fixture: ComponentFixture<ReportgivingstatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportgivingstatisticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportgivingstatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
