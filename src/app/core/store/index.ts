import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import { environment } from '@env';
import * as fromNotes from '@modules/notes/store/notes.reducer';
import * as fromMarket from '@shared/market/store/market.reducer';

export interface AppState {
  notes: fromNotes.NotesState;
  market: fromMarket.MarketState;
}

export const reducers: ActionReducerMap<AppState> = {
  notes: fromNotes.reducer,
  market: fromMarket.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
