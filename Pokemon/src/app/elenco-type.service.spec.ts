import { TestBed } from '@angular/core/testing';

import { ElencoTypeService } from './elenco-type.service';

describe('ElencoTypeService', () => {
  let service: ElencoTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElencoTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
