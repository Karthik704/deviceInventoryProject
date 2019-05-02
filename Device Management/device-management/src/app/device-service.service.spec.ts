import { TestBed } from '@angular/core/testing';

import { DeviceServiceService } from './device-service.service';

describe('DeviceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceServiceService = TestBed.get(DeviceServiceService);
    expect(service).toBeTruthy();
  });
});
