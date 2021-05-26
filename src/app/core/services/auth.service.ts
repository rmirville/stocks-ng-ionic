import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CoreModule } from '@app/core.module';
import { GoogleOAuthService } from '@shared/services/google-oauth.service';

@Injectable({
  providedIn: CoreModule
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
    this.oAuth.getLoginUrl().subscribe(url => {
      window.location.href = url;
    });
  }
}
