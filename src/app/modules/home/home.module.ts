import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './pages/home/home.page';
import { SharedModule } from '@shared/shared.module';

import { HomePageRoutingModule } from './home-routing.module';
import { CurrentStockComponent } from './components/current-stock/current-stock.component';
import { ProspectiveStockComponent } from './components/prospective-stock/prospective-stock.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    CurrentStockComponent,
    ProspectiveStockComponent
  ]
})
export class HomePageModule {}
