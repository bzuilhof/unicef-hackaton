import { Component, OnInit } from '@angular/core';
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
  xp = 0;

  upgrades: Upgrade[] = [
    { name: 'Upgrade bucket', initialPrice: 10, levelRequired: 1, owned: 0 },
    { name: 'Upgrade rope', initialPrice: 20, levelRequired: 2, owned: 0 },
    { name: 'Upgrade stones', initialPrice: 50, levelRequired: 3, owned: 0 },
    { name: 'Upgrade roof', initialPrice: 100, levelRequired: 4, owned: 0 },
  ];

  facilities: Facility[] = [
    { name: 'Hospital', initialPrice: 10, levelRequired: 1, owned: 0 },
    { name: 'School', initialPrice: 20, levelRequired: 2, owned: 0 },
    { name: 'Water facility', initialPrice: 50, levelRequired: 3, owned: 0 },
    { name: 'Daycare', initialPrice: 100, levelRequired: 4, owned: 0 },
  ];

  openStore = false;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  getAvailableUpgrades() {
    const currLevel = this.getLevel();
    return this.upgrades.filter((upgrade: Upgrade) => upgrade.levelRequired <= currLevel);
  }

  getAvailableFacilities() {
    const currLevel = this.getLevel();
    return this.facilities.filter((upgrade: Upgrade) => upgrade.levelRequired <= currLevel);
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
      this.xp += this.facilities[facilityIndex].initialPrice;
    }
    this.currency -= purchaseEvent.cost;
  }

  getProgress() {
    const currLevel = this.getLevel();
    const currentLevelStartXp = this.getXpForLevel(currLevel - 1);
    const totalLevelXp = this.getXpForLevel(currLevel) - currentLevelStartXp;
    return (this.xp - currentLevelStartXp) / (totalLevelXp / 100);
  }

  private getLevel() {
    return Math.floor((Math.sqrt(625 + 100 * this.xp) + 25) / 50);
  }

  private getXpForLevel(level: number) {
    return 25 * level * (1 + level);
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
