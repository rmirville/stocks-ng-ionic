import { createAction } from '@ngrx/store';

import { ACTION_TYPES } from '@app/store/action-types';

export namespace NotesSummaryActions {
  export const getNotes = createAction(ACTION_TYPES.noteSummaryComponent.GET_SUMMARIES_ALL);
}
