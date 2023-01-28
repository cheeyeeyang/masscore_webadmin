import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembermassorganizationComponent } from './membermassorganization.component';

describe('MembermassorganizationComponent', () => {
  let component: MembermassorganizationComponent;
  let fixture: ComponentFixture<MembermassorganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembermassorganizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembermassorganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
