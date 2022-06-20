import { TestBed } from '@angular/core/testing';

import { BlogspotService } from './blogspot.service';

describe('BlogspotService', () => {
  let service: BlogspotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogspotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
