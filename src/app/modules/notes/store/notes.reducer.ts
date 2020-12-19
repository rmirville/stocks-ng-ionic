import { Action, createReducer, on } from '@ngrx/store';

import { StockNoteMap } from '@shared/notes/types/stock-note-map';
import { StockNoteLoaderActions } from '@shared/notes/store/stock-note-loader.actions';

export interface NotesState {
  stockNotes: StockNoteMap;
  getAllStatus: {
    fetchAttempted: boolean;
    hasError: boolean;
    error?: Error;
  };
}

const initialState: NotesState = {
  stockNotes: {},
  getAllStatus: {
    fetchAttempted: false,
    hasError: false
  }
};

export const reducer = createReducer<NotesState, Action>(
  initialState,
  on(StockNoteLoaderActions.getAllSummariesSuccess, (state, { stockNotes }) => {
    // console.group('NotesReducer::StockNoteLoaderActions.getAllSummariesSuccess');
    // console.log(`stockNotes: ${JSON.stringify(stockNotes)}`);
    const getAllStatus = {
      fetchAttempted: true,
      hasError: false
    };
    const newState: NotesState = { ...state, stockNotes, getAllStatus };
    // console.groupEnd();
    return newState;
  }),
  on(StockNoteLoaderActions.getAllSummariesFailure, (state, { error }) => {
    const getAllStatus = {
      fetchAttempted: true,
      hasError: true,
      error
    };
    return { ...state, getAllStatus };
  }),
);

export const featureKey = 'notes';
