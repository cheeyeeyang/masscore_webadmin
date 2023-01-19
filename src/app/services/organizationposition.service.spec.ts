import { TestBed } from '@angular/core/testing';

import { OrganizationpositionService } from './organizationposition.service';

describe('OrganizationpositionService', () => {
  let service: OrganizationpositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationpositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
