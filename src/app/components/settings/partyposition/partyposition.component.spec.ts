import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartypositionComponent } from './partyposition.component';

describe('PartypositionComponent', () => {
  let component: PartypositionComponent;
  let fixture: ComponentFixture<PartypositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartypositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartypositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
