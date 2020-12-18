import { TestBed } from '@angular/core/testing';

import { HardcodedCredentialsService } from './hardcoded-credentials.service';

describe('HardcodedCredentialsService', () => {
  let service: HardcodedCredentialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedCredentialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
