import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Inventory from '../../../models/inventory';
import Upgrade from '../../../models/Upgrade';
import Facility from '../../../models/Facility';

@Component({
  selector: 'app-stage-store',
  templateUrl: './stage-store.component.html',
  styleUrls: ['./stage-store.component.scss']
})
export class StageStoreComponent implements OnInit {

  @Input() inventory: Inventory;
  @Input() upgrades: Upgrade[];
  @Input() facilities: Facility[];
  @Input() currency: number;

  @Output() purchase: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  commitPurchase(cost: number, upgradeType: string) {
    this.purchase.emit({cost, upgradeType});
  }

  currentPrice(intialPrice: number, owned: number) {
    return Math.ceil(intialPrice * Math.pow(1.5, owned ));
  }
}
