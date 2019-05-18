import { TestBed } from '@angular/core/testing';

import { DemoappService } from './demoapp.service';

describe('DemoappService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoappService = TestBed.get(DemoappService);
    expect(service).toBeTruthy();
  });
});
