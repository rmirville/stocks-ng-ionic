import { TestBed } from '@angular/core/testing';

import { StockConstLoaderService } from './stock-const-loader.service';

describe('StockConstLoaderService', () => {
  let service: StockConstLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockConstLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
