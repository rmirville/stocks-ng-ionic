import { Component, Input, OnInit } from '@angular/core';

import { Stock } from '@shared/types/stock';

@Component({
  selector: 'stocks-prospective-stock',
  templateUrl: './prospective-stock.component.html',
  styleUrls: ['./prospective-stock.component.scss'],
})
export class ProspectiveStockComponent implements OnInit {

  @Input() stock: Stock;

  constructor() { }

  ngOnInit() {}

}
