import { Component, OnInit } from '@angular/core';
import PurchaseEvent from '../../models/PurchaseEvent';
import {MatDialog} from '@angular/material';
import {BuyCoinsComponent} from './buy-coins/buy-coins.component';
import Deal from '../../models/deal';
import Upgrade from '../../models/Upgrade';
import Facility from '../../models/Facility';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {
  coinCurrency = 0;
  currency = 34749;
  currencyImage = 'drop.png';
  increment = 1;
  xp = 0;
  autoClickerEnabled = false;

  upgrades: Upgrade[] = [
    { name: 'Upgrade emmer', initialPrice: 10, levelRequired: 1, owned: 0 },
    { name: 'Upgrade touw', initialPrice: 20, levelRequired: 2, owned: 0 },
    { name: 'Upgrade stenen', initialPrice: 50, levelRequired: 3, owned: 0 },
    { name: 'Upgrade dak', initialPrice: 100, levelRequired: 4, owned: 0 },
  ];

  facilities: Facility[] = [
    { name: 'Ziekenhuis', initialPrice: 10, levelRequired: 1, owned: 0 },
    { name: 'School', initialPrice: 20, levelRequired: 2, owned: 0 },
    { name: 'water voorziening', initialPrice: 50, levelRequired: 3, owned: 0 },
    { name: 'Daycare', initialPrice: 100, levelRequired: 4, owned: 0 },
  ];

  facilityInventory: string[] = [];

  screen = 'view';

  constructor(
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  private enableAutoClicker() {
    setInterval(() => this.increaseCurrency(), 1000);
    this.autoClickerEnabled = true;
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

  private toggleScreen(screen: string) {
    this.screen = screen;
  }

  private increaseCurrency() {
    this.currency += this.increment;
  }

  commitPurchase(purchaseEvent: PurchaseEvent) {
    const upgradeIndex = this.upgrades.findIndex((upgrade: Upgrade) => upgrade.name === purchaseEvent.upgradeType);

    if (purchaseEvent.upgradeType === 'autoClicker') {
      this.enableAutoClicker();
    } else if (upgradeIndex !== -1) {
      this.upgrades[upgradeIndex].owned++;
      this.calcIncrement();
    } else {
      const facilityIndex  = this.facilities.findIndex((facility: Facility) => facility.name === purchaseEvent.upgradeType);
      this.facilities[facilityIndex].owned++;
      this.xp += this.facilities[facilityIndex].initialPrice;
      this.facilityInventory.push(purchaseEvent.upgradeType);
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
    const dialog = this.dialog.open(BuyCoinsComponent, {
      width: '80%',
    });
    dialog.afterClosed().subscribe((deal: Deal) => {
      if (deal && deal.coins) {
        this.coinCurrency += deal.coins;
      }
    });
  }

  private onBackPressed() {
    if (this.screen === 'view') {
      this.router.navigateByUrl('level-selection');
    } else {
      this.screen = 'view';
    }
  }

  private goToExpedition() {
    this.router.navigateByUrl('expedition');
  }
}
