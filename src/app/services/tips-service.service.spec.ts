import { TestBed } from '@angular/core/testing';

import { TipsServiceService } from './tips-service.service';

describe('TipsServiceService', () => {
  let service: TipsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
