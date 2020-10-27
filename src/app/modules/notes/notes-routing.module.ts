import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesPage } from './pages/notes/notes.page';
import { NoteDetailsPage } from './pages/note-details/note-details.page';

const routes: Routes = [
  {
    path: ':symbol',
    component: NoteDetailsPage
  },
  {
    path: '',
    component: NotesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {}
