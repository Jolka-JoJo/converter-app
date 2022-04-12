import { TestBed } from '@angular/core/testing';

import { PrefixesServiceService } from './prefixes-service.service';

describe('PrefixesServiceService', () => {
  let service: PrefixesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrefixesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
