import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import { environment } from '@env';
import * as fromAccount from '@modules/account/store/account.reducer';
import { AccountState } from '@modules/account/store/account.state';
import * as fromNotes from '@modules/notes/store/notes.reducer';
import { NotesState } from '@modules/notes/store/notes.state';
import * as fromMarket from '@shared/market/store/market.reducer';
import { MarketState } from '@shared/market/store/market.state';

export interface AppState {
  account: AccountState;
  market: MarketState;
  notes: NotesState;
}

export const reducers: ActionReducerMap<AppState> = {
  account: fromAccount.reducer,
  market: fromMarket.reducer,
  notes: fromNotes.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
