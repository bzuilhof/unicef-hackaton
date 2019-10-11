import { Component, OnInit } from '@angular/core';
import Inventory from '../../models/inventory';
import PurchaseEvent from '../../models/PurchaseEvent';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {

  currency = 0;
  currencyImage = 'drop.png';
  increment = 1;

  inventory: Inventory = {
    pumpServants: 0,
    pumpUpgrades: 0
  };

  openStore = false;

  constructor() { }

  ngOnInit() {
  }

  calcIncrement() {
    this.increment = this.inventory.pumpServants * 2 + this.inventory.pumpUpgrades * 10;
  }

  toggleStore() {
    this.openStore = !this.openStore;
  }

  increaseCurrency() {
    this.currency += this.increment;
  }

  commitPurchase(purchaseEvent: PurchaseEvent) {
    this.currency -= purchaseEvent.cost;
    this.inventory[purchaseEvent.upgradeType]++;
    this.calcIncrement();
  }
}
