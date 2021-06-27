import { TestBed } from '@angular/core/testing';

import { ApiMedicineService } from './api-medicine.service';

describe('ApiMedicineService', () => {
  let service: ApiMedicineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMedicineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
