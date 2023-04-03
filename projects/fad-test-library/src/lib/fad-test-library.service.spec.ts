import { TestBed } from '@angular/core/testing';

import { FadTestLibraryService } from './fad-test-library.service';

describe('FadTestLibraryService', () => {
  let service: FadTestLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FadTestLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
