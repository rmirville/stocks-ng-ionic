import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LoadingStatusService } from '@app/services/loading-status.service';

@Component({
  selector: 'stocks-notes',
  templateUrl: 'notes.page.html',
  styleUrls: ['notes.page.scss']
})
export class NotesPage implements OnInit {

  isLoading: boolean;
  isLoading$: Observable<boolean>;

  constructor(private lss: LoadingStatusService) { }

  ngOnInit() {
    // console.group('NotesPage::ngOnInit()');
    this.isLoading$ = this.lss.createStatus('notes');
    
    this.isLoading$.subscribe(status => {
      setTimeout(() => {
        this.isLoading = status;
        // console.log(`new loading status: ${status}`);
      }, 0);
    });
    this.lss.startLoading('notes');
    // console.groupEnd();
  }

}
