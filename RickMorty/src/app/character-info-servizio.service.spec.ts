import { TestBed } from '@angular/core/testing';

import { CharacterInfoServizioService } from './character-info-servizio.service';

describe('CharacterInfoServizioService', () => {
  let service: CharacterInfoServizioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterInfoServizioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
