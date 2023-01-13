import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovermentpositionComponent } from './govermentposition.component';

describe('GovermentpositionComponent', () => {
  let component: GovermentpositionComponent;
  let fixture: ComponentFixture<GovermentpositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovermentpositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovermentpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
