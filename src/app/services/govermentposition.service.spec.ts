import { TestBed } from '@angular/core/testing';

import { GovermentpositionService } from './govermentposition.service';

describe('GovermentpositionService', () => {
  let service: GovermentpositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GovermentpositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
