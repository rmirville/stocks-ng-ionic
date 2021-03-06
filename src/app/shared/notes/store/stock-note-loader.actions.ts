import { createAction, props } from '@ngrx/store';

import { messages } from '@app/store/action-types';
import { StockNote } from '@shared/notes/types/stock-note';
import { StockNoteMap } from '@shared/notes/types/stock-note-map';

export namespace StockNoteLoaderActions {
  export const getAllSummariesSuccess = createAction(messages.noteLoaderService.GET_SUMMARIES_ALL_SUCCESS, props<{stockNotes: StockNoteMap}>());
  export const getAllSummariesFailure = createAction(messages.noteLoaderService.GET_SUMMARIES_ALL_FAILURE, props<{error: Error}>());
  export const getNoteDetailsSuccess = createAction(messages.noteLoaderService.GET_DETAILS_ONE_SUCCESS, props<{stockNote: StockNote}>());
  export const getNoteDetailsFailure = createAction(messages.noteLoaderService.GET_DETAILS_ONE_FAILURE, props<{error: Error}>());
}
