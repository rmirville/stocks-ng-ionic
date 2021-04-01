import { Injectable } from '@angular/core';
import { environment } from '@env';

import { OAuthAbstractService } from './oauth-abstract-service';

@Injectable({
  providedIn: 'root'
})
export class GoogleOAuthService implements OAuthAbstractService {

  authEndpoint: string = 'https://accounts.google.com/o/oauth2/v2/auth';
  authReqConfig = {
    clientId: null,
    redirectUri: null,
  };

  clientConfig = environment.GOOGLE_CONFIG.oAuth;

  constructor() {
    this.authReqConfig = {
      clientId: this.clientConfig.clientId,
      redirectUri: this.clientConfig.clientRedirectUri,
    };
  }

  getLoginUrl(): Promise<string> {
    const scope: string[] = [
      'openid',
      'https://www.googleapis.com/auth/userinfo.profile'
    ];
    const responseType: string = 'token';
    let loginUrl: string = 'this.authEndpoint?client_id=' + this.authReqConfig.clientId;
    loginUrl += '&redirect_uri=' + this.authReqConfig.redirectUri;
    loginUrl += '&response_type=token';
    loginUrl += '&scope=$' + scope.join(' ');
    return new Promise<string>(() => loginUrl);
  }
}
