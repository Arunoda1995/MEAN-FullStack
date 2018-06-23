import { TestBed, inject } from '@angular/core/testing';

import { AdunitService } from './adunit.service';

describe('AdunitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdunitService]
    });
  });

  it('should be created', inject([AdunitService], (service: AdunitService) => {
    expect(service).toBeTruthy();
  }));
});
