import { TestBed } from '@angular/core/testing';

import { MockservicesService } from './mockservices.service';

describe('MockservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockservicesService = TestBed.get(MockservicesService);
    expect(service).toBeTruthy();
  });
});
