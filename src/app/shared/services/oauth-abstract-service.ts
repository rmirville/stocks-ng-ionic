import { Observable } from 'rxjs';

export interface OAuthAbstractService {
  getLoginUrl: () => Observable<string>;
};
