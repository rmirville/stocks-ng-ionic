import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { httpInterceptorProviders } from '@app/interceptors';
import { AuthService } from '@app/auth/services/auth.service';
import { FirebaseOAuthService } from '@app/auth/services/firebase-oauth.service';
import { AuthEffects } from '@app/auth/store/auth.effects';
import { LoadingStatusService } from '@app/services/loading-status.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [
    AuthService,
    FirebaseOAuthService,
    httpInterceptorProviders,
    LoadingStatusService,
  ]
})
export class CoreModule { }
