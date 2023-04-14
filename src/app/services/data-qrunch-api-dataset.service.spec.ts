import { TestBed } from '@angular/core/testing';

import { DataQrunchApiDatasetService } from './data-qrunch-api-dataset.service';

describe('DataQrunchApiDatasetServiceService', () => {
  let service: DataQrunchApiDatasetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataQrunchApiDatasetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
