import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Inventory from '../../../models/inventory';

@Component({
  selector: 'app-stage-store',
  templateUrl: './stage-store.component.html',
  styleUrls: ['./stage-store.component.scss']
})
export class StageStoreComponent implements OnInit {

  @Input() inventory: Inventory;
  @Input() currency: number;

  @Output() purchase: EventEmitter<any> = new EventEmitter();

  constructor() { }
  ngOnInit() {
  }

  commitPurchase(cost: number, upgradeType: string) {
    this.purchase.emit({cost, upgradeType});
  }
}
