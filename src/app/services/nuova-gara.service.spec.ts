import { TestBed } from '@angular/core/testing';

import { NuovaGaraService } from './nuova-gara.service';

describe('NuovaGaraService', () => {
  let service: NuovaGaraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuovaGaraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
