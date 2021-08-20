import { StockNote } from '@shared/notes/types';
import { Dictionary } from '@shared/types';

export interface NotesFetchState {
  readonly fetchAttempted: boolean;
  readonly hasError: boolean;
  readonly error?: Error;
}

export interface NotesState {
  readonly stockNotes: Dictionary<StockNote>;
  readonly getAllStatus: NotesFetchState;
  readonly getOneStatus: NotesFetchState;
}
