import { Component, Input, OnInit } from '@angular/core';

import { StockNoteSummary } from '../../store/notes.selectors';

@Component({
  selector: 'stocks-prospective-stock',
  templateUrl: './prospective-stock.component.html',
  styleUrls: ['./prospective-stock.component.scss'],
})
export class ProspectiveStockComponent implements OnInit {

  @Input() stock: StockNoteSummary;

  constructor() { }

  ngOnInit() { }

}
