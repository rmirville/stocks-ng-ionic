import { createAction, props } from '@ngrx/store';

import { messages } from '@app/store/action-types';

export namespace NoteDetailsActions {
  export const getNote = createAction(messages.noteDetailsPage.GET_DETAILS_ONE, props<{symbol: string}>());
}
