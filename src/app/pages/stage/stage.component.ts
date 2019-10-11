import {Component, OnInit} from '@angular/core';
import PurchaseEvent from '../../models/PurchaseEvent';
import {MatDialog} from '@angular/material';
import {BuyCoinsComponent} from './buy-coins/buy-coins.component';
import Deal from '../../models/deal';
import Upgrade from '../../models/Upgrade';
import Facility from '../../models/Facility';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {

  coin_currency = 0;
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

  constructor(
    public dialog: MatDialog
  ) { }

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

  private buyCoins() {
    let dialog = this.dialog.open(BuyCoinsComponent, {
      width: '80%',
    });
    dialog.afterClosed().subscribe((deal: Deal) => {
      if (deal && deal.coins) {
        this.coin_currency += deal.coins;
      }
    })
  }
}
