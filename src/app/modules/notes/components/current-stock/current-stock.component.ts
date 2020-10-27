import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { LoadingStatusService } from '@app/services/loading-status.service';
import { Stock } from '@shared/types/stock';

@Component({
  selector: 'stocks-current-stock',
  templateUrl: './current-stock.component.html',
  styleUrls: ['./current-stock.component.scss'],
})
export class CurrentStockComponent implements OnInit, OnChanges {

  displayedStock: Stock;

  @Input() stock: Stock;

  constructor(private lss: LoadingStatusService) { }

  ngOnInit() {
    this.lss.stopLoading('current-stock');
  }

  ngOnChanges() {
    console.group('CurrentStockComponent::ngOnChanges()');
    console.log(`stock: ${JSON.stringify(this.stock)}`);
    this.displayedStock = this.stock;
    console.groupEnd();
  }

}
