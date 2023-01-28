import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementstatisticComponent } from './movementstatistic.component';

describe('MovementstatisticComponent', () => {
  let component: MovementstatisticComponent;
  let fixture: ComponentFixture<MovementstatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementstatisticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovementstatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
