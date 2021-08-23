import { Action, createReducer, on } from '@ngrx/store';

import { AuthActions } from '@app/auth/store/auth.actions';

import { AccountState, initialAccountState } from './account.state';

export const reducer = createReducer<AccountState, Action>(
  initialAccountState,
  on(AuthActions.loginFailure, (state) => {
    const newState: AccountState = { ...state, login: { ...state.login, loggedIn: false } };
    return newState;
  }),
  on(AuthActions.loginSuccess, (state) => {
    const newState: AccountState = { ...state, login: { ...state.login, loggedIn: true } };
    return newState;
  }),
);
