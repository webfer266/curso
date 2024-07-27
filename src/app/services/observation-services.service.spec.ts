import { TestBed } from '@angular/core/testing';

import { ObservationServicesService } from './observation-services.service';

describe('ObservationServicesService', () => {
  let service: ObservationServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservationServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
