import { createAction, props } from '@ngrx/store';

import { ACTION_TYPES } from '@app/store/action-types';

export namespace NoteDetailsActions {
  export const getNote = createAction(ACTION_TYPES.noteDetailsPage.GET_DETAILS_ONE, props<{symbol: string}>());
}
