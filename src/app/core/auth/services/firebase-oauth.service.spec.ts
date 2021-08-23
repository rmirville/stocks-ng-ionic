import { TestBed } from '@angular/core/testing';

import { FirebaseOAuthService } from './firebase-oauth.service';

describe('FirebaseOAuthService', () => {
  let service: FirebaseOAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseOAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
