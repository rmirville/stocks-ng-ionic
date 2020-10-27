import { TestBed } from '@angular/core/testing';

import { StockNoteConstLoaderService } from './stock-note-const-loader.service';

describe('StockConstLoaderService', () => {
  let service: StockNoteConstLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockNoteConstLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
