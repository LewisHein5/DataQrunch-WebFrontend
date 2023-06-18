import { TestBed } from '@angular/core/testing';

import { DataQrunchApiService } from './data-qrunch-api.service';

describe('DataQrunchApiServiceService', () => {
  let service: DataQrunchApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataQrunchApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
