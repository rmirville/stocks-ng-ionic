import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private auth: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Observable(observer => {
      this.auth.loggedIn().pipe(take(1)).subscribe(isLoggedIn => {

        if (!isLoggedIn) {
          this.auth.getLoginForm();
          observer.next(false);
        } else {
          observer.next(true);
        }
        observer.complete();

      });
    });

  }

}
