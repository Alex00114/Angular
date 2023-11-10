import { TestBed } from '@angular/core/testing';

import { PokemoninfoService } from './pokemoninfo.service';

describe('PokemoninfoService', () => {
  let service: PokemoninfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemoninfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
