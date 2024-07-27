import { TestBed } from '@angular/core/testing';

import { ObservationQuestionService } from './observation-question.service';

describe('ObservationQuestionService', () => {
  let service: ObservationQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservationQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
