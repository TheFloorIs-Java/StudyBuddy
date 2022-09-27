import { TestBed } from '@angular/core/testing';

import { HwCompletedServiceService } from './hw-completed-service.service';

describe('HwCompletedServiceService', () => {
  let service: HwCompletedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HwCompletedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
