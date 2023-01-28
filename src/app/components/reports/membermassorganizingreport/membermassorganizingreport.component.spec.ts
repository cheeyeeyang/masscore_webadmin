import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembermassorganizingreportComponent } from './membermassorganizingreport.component';

describe('MembermassorganizingreportComponent', () => {
  let component: MembermassorganizingreportComponent;
  let fixture: ComponentFixture<MembermassorganizingreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembermassorganizingreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembermassorganizingreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
