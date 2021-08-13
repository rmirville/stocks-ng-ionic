import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@app/services/auth/auth.service';

@Component({
  selector: 'stocks-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  private login(): void {
    this.auth.login().subscribe((result: boolean) => {
      if (result) {
        this.router.navigate(['tabs', 'notes']);
      }
    });
  }

}
