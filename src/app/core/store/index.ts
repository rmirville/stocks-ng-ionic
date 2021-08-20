import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import { environment } from '@env';
import * as fromNotes from '@modules/notes/store';
import * as fromMarket from '@shared/market/store';

export interface AppState {
  notes: fromNotes.NotesState;
  market: fromMarket.MarketState;
}

export const reducers: ActionReducerMap<AppState> = {
  notes: fromNotes.reducer,
  market: fromMarket.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export * from './action-types';
