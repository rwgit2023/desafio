import { TestBed } from '@angular/core/testing';

import { TintasService } from './tintas.service';

describe('TintasService', () => {
  let service: TintasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TintasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
