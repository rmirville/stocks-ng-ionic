import { Action, createReducer, on } from '@ngrx/store';

import { StockNoteLoaderActions } from '@shared/notes/store/stock-note-loader.actions';
import { StockNote } from '@shared/notes/types';
import { Dictionary } from '@shared/types';

import { NotesState } from './notes.state';

const initialState: NotesState = {
  stockNotes: {},
  getAllStatus: {
    fetchAttempted: false,
    hasError: false
  },
  getOneStatus: {
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
  on(StockNoteLoaderActions.getNoteDetailsSuccess, (state, { stockNote }) => {
    const getOneStatus = {
      fetchAttempted: true,
      hasError: false
    };
    const symbol: string = stockNote.symbol;
    const stockNotes: Dictionary<StockNote> = { ...state.stockNotes, [symbol]: stockNote };
    return { ...state, stockNotes, getOneStatus };
  }),
  on(StockNoteLoaderActions.getNoteDetailsFailure, (state, { error }) => {
    const getOneStatus = {
      fetchAttempted: true,
      hasError: true,
      error
    };
    return { ...state, getOneStatus };
  })
);

export const featureKey = 'notes';
