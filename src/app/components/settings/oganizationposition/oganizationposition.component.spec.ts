import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OganizationpositionComponent } from './oganizationposition.component';

describe('OganizationpositionComponent', () => {
  let component: OganizationpositionComponent;
  let fixture: ComponentFixture<OganizationpositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OganizationpositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OganizationpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
