import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LoadingStatusService } from '@app/services/loading-status.service';

@Component({
  selector: 'stocks-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  isLoading: boolean;
  isLoading$: Observable<boolean>;

  constructor(private lss: LoadingStatusService) { }

  ngOnInit() {
    console.group('HomePage::ngOnInit()');
    this.isLoading$ = this.lss.createStatus('home');
    
    this.isLoading$.subscribe(status => {
      setTimeout(() => {
        this.isLoading = status;
        // console.log(`new loading status: ${status}`);
      }, 0);
    });
    this.lss.startLoading('home');
    console.groupEnd();
  }

}
