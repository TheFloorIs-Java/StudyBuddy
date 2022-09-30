import { TestBed } from '@angular/core/testing';

import { CompleteServiceService } from './complete-service.service';

describe('CompleteServiceService', () => {
  let service: CompleteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompleteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
