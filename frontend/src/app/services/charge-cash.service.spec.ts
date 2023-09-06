import { TestBed } from '@angular/core/testing';

import { ChargeCashService } from './charge-cash.service';

describe('ChargeCashService', () => {
  let service: ChargeCashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChargeCashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
