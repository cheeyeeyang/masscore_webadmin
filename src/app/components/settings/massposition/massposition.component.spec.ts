import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasspositionComponent } from './massposition.component';

describe('MasspositionComponent', () => {
  let component: MasspositionComponent;
  let fixture: ComponentFixture<MasspositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasspositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasspositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
