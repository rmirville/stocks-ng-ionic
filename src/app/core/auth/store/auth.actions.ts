import { createAction } from '@ngrx/store';

import { ACTION_TYPES } from '@app/store/action-types';

export namespace AuthActions {
  export const loginSuccess = createAction(ACTION_TYPES.authService.LOGIN_SUCCESS);
  export const loginFailure = createAction(ACTION_TYPES.authService.LOGIN_FAILURE);
  export const registerSuccess = createAction(ACTION_TYPES.authService.REGISTER_SUCCESS);
  export const registerFailure = createAction(ACTION_TYPES.authService.REGISTER_FAILURE);
}
