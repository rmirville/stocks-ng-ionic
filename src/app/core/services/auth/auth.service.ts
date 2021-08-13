import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CoreModule } from '@app/core.module';
import { FirebaseOAuthService } from './firebase-oauth.service';

@Injectable({
  providedIn: CoreModule
})
export class AuthService {

  loggedIn: boolean = false;

  constructor( private oAuth: FirebaseOAuthService ) { }

  public isLoggedIn(): Observable<boolean> {
    return this.oAuth.isLoggedIn();
  }

  public login(): Observable<boolean> {
    return this.oAuth.login();
  }

  public handle(req: HttpRequest<any>): void {
    this.oAuth.isLoggedIn().subscribe();
  }
}
