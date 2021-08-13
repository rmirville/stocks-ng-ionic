import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';

import { LoginPage } from './pages/login/login.page';

const redirectLoggedInToNotes = () => redirectLoggedInTo(['notes']);

const routes: Routes = [
  {
    path: 'login',
    ...canActivate(redirectLoggedInToNotes),
    component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
