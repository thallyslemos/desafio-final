import { TestBed } from '@angular/core/testing';

import { VehicleDataService } from './vehicleData.service';

describe('TableService', () => {
  let service: VehicleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
