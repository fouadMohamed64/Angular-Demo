import { TestBed } from '@angular/core/testing';

import { APIIntegrationService } from './apiintegration.service';

describe('APIIntegrationService', () => {
  let service: APIIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
