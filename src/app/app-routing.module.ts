import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('@modules/account/account.module').then( m => m.AccountModule),
  },
  {
    path: 'login',
    redirectTo: '/account/login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('@modules/tabs/tabs.module').then(m => m.TabsPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules/*, enableTracing: true*/ })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
