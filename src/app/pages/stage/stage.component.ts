import { Component, OnInit } from '@angular/core';
import Inventory from '../../models/inventory';
import PurchaseEvent from '../../models/PurchaseEvent';
import Upgrade from '../../models/Upgrade';
import Facility from '../../models/Facility';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {

  currency = 0;
  currencyImage = 'drop.png';
  increment = 1;

  upgrades: Upgrade[] = [
    { name: 'Upgrade bucket', initialPrice: 10, levelRequired: 0, owned: 0 },
    { name: 'Upgrade rope', initialPrice: 20, levelRequired: 0, owned: 0 },
    { name: 'Upgrade stones', initialPrice: 50, levelRequired: 0, owned: 0 },
    { name: 'Upgrade roof', initialPrice: 100, levelRequired: 0, owned: 0 },
  ];

  facilities: Facility[] = [
    { name: 'Hospital', initialPrice: 10, levelRequired: 0, owned: 0 },
    { name: 'School', initialPrice: 20, levelRequired: 0, owned: 0 },
    { name: 'Water facility', initialPrice: 50, levelRequired: 0, owned: 0 },
    { name: 'Daycare', initialPrice: 100, levelRequired: 0, owned: 0 },
  ];

  openStore = false;

  constructor() { }

  ngOnInit() {
  }

  calcIncrement() {
    let newIncrement = 1;
    this.upgrades.forEach((upgrade: Upgrade) => newIncrement += (upgrade.owned * upgrade.initialPrice / 10));
    this.increment = newIncrement;
  }

  private toggleStore() {
    this.openStore = !this.openStore;
  }

  private increaseCurrency() {
    this.currency += this.increment;
  }

  commitPurchase(purchaseEvent: PurchaseEvent) {
    const upgradeIndex = this.upgrades.findIndex((upgrade: Upgrade) => upgrade.name === purchaseEvent.upgradeType);

    if (upgradeIndex !== -1) {
      this.upgrades[upgradeIndex].owned++;
      this.calcIncrement();
    } else {
      const facilityIndex  = this.facilities.findIndex((facility: Facility) => facility.name === purchaseEvent.upgradeType);
      this.facilities[facilityIndex].owned++;
    }
    this.currency -= purchaseEvent.cost;

  }
}
