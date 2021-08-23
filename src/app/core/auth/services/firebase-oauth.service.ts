import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import firebase from 'firebase';
import { Observable, from } from 'rxjs';
import { switchAll } from 'rxjs/operators';

import { OAuthAbstractService } from './oauth-abstract-service';
import { map } from 'rxjs/operators';

@Injectable()
export class FirebaseOAuthService implements OAuthAbstractService {

  loggedIn: boolean = false;

  constructor(private auth: AngularFireAuth, private router: Router) {
  }

  public login(): Observable<boolean> {
    return this.isLoggedIn().pipe(
      map((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          const provider = new firebase.auth.GoogleAuthProvider();
          provider.addScope('openid');
          return from(this.auth.signInWithPopup(provider));
        }
      }),
      switchAll(),
      map((result: firebase.auth.UserCredential) => {
        if (result) {
          return true;
        }
        else {
          return false;
        }
      })
    );
  }

  public isLoggedIn(): Observable<boolean> {
    return from(this.auth.currentUser).pipe(
      map((user: firebase.User) => {
        if (user) {
          this.loggedIn = true;
        }
        else {
          this.loggedIn = false;
        }
        return this.loggedIn;
      }),
    );
  }

}
