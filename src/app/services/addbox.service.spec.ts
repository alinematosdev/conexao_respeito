import { TestBed } from '@angular/core/testing';

import { AddBoxService } from './addbox.service';

describe('AddboxService', () => {
  let service: AddBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
