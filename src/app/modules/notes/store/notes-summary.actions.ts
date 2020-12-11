import { createAction } from '@ngrx/store';

import { messages } from '@app/store/action-types';

export namespace NotesSummaryActions {
  export const getNotes = createAction(messages.noteSummaryComponent.GET_SUMMARIES_ALL);
}
