import { TestBed } from '@angular/core/testing';

import { InterceptorBasicAuthService } from './interceptor-basic-auth.service';

describe('InterceptorBasicAuthService', () => {
  let service: InterceptorBasicAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorBasicAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
