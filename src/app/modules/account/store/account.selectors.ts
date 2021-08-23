import { Selector } from '@ngrx/store';
import { AppState } from '@app/store';

export const selectLoginStatus: Selector<AppState, boolean> = (state: AppState) => state.account.login.loggedIn;
