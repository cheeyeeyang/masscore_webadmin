import { TestBed } from '@angular/core/testing';

import { PartypositionService } from './partyposition.service';

describe('PartypositionService', () => {
  let service: PartypositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartypositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
