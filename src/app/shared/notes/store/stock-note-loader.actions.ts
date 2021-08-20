import { createAction, props } from '@ngrx/store';

import { ACTION_TYPES } from '@app/store';
import { StockNote } from '@shared/notes/types';
import { Dictionary } from '@shared/types';

export namespace StockNoteLoaderActions {
  export const getAllSummariesSuccess = createAction(ACTION_TYPES.noteLoaderService.GET_SUMMARIES_ALL_SUCCESS, props<{stockNotes: Dictionary<StockNote>}>());
  export const getAllSummariesFailure = createAction(ACTION_TYPES.noteLoaderService.GET_SUMMARIES_ALL_FAILURE, props<{error: Error}>());
  export const getNoteDetailsSuccess = createAction(ACTION_TYPES.noteLoaderService.GET_DETAILS_ONE_SUCCESS, props<{stockNote: StockNote}>());
  export const getNoteDetailsFailure = createAction(ACTION_TYPES.noteLoaderService.GET_DETAILS_ONE_FAILURE, props<{error: Error}>());
}
