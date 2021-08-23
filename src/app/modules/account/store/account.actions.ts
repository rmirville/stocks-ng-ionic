import { createAction } from '@ngrx/store';

import { ACTION_TYPES } from '@app/store/action-types';

export namespace AccountActions {
  export const login = createAction(ACTION_TYPES.loginPage.LOGIN);
}
