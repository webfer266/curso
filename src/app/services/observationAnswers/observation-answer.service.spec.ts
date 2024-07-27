import { TestBed } from '@angular/core/testing';

import { ObservationAnswerService } from './observation-answer.service';

describe('ObservationAnswerService', () => {
  let service: ObservationAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservationAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
