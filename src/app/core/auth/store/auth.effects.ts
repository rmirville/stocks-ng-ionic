import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { AccountActions } from '@modules/account/store/account.actions';

import { AuthActions } from './auth.actions';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => 
    this.actions$.pipe(
      ofType(AccountActions.login),
      exhaustMap(() => 
        this.authSvc.login().pipe(
          catchError(() => from([AuthActions.loginFailure()])),
          map((status) => status ? AuthActions.loginSuccess() : AuthActions.loginFailure()),
        )
      ),
    )
  );
  constructor(
    private actions$: Actions,
    private authSvc: AuthService
  ) {}
}
