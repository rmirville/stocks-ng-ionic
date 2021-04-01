import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GoogleOAuthService } from '@shared/services/google-oauth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  constructor( private oAuth: GoogleOAuthService ) { }

  loggedIn(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      observer.next(this.isLoggedIn);
      observer.complete();
    });
  }

  getLoginForm(): void {
    this.oAuth.getLoginUrl().then(url => {
      window.location.href = url;
    });
  }
}
