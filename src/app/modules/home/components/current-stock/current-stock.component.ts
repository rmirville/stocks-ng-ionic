import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { Stock } from '@shared/types/stock';

@Component({
  selector: 'stocks-current-stock',
  templateUrl: './current-stock.component.html',
  styleUrls: ['./current-stock.component.scss'],
})
export class CurrentStockComponent implements OnInit, OnChanges {

  displayedStock: Stock;

  @Input() stock: Stock;

  constructor() { }

  ngOnInit() {}

  ngOnChanges() {
    console.group('CurrentStockComponent::ngOnChanges()');
    console.log(`stock: ${JSON.stringify(this.stock)}`);
    this.displayedStock = this.stock;
    console.groupEnd();
  }

}
