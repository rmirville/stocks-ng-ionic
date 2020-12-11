import { Component, Input, OnInit } from '@angular/core';

import { StockNote } from '@shared/notes/types/stock-note';

@Component({
  selector: 'stocks-note-comp',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss'],
})
export class NoteDetailsComponent implements OnInit {

  @Input() note: StockNote;

  constructor() { }

  ngOnInit() {}

}
