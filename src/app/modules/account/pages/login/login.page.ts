import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthService } from '@app/auth/services/auth.service';

import { selectLoginStatus } from '../../store/account.selectors';
import { AccountActions } from '../../store/account.actions';

@Component({
  selector: 'stocks-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(private auth: AuthService, private router: Router, private store: Store) { }

  ngOnInit() {
  }

  private login(): void {
    this.isLoggedIn$ = this.store.select(selectLoginStatus);
    this.isLoggedIn$.subscribe((loggedIn: boolean) => {
      // console.group('LoginPage::isLoggedIn$.subscribe()');
      // console.log(`loggedIn: ${JSON.stringify(loggedIn)}`);
      if (loggedIn) {
        // console.log('redirecting');
        this.router.navigate(['tabs', 'notes']);
      }
      else {
        // console.log('dispatching login action');
        this.store.dispatch(AccountActions.login());
      }
      // console.groupEnd();
    })
  }

}
