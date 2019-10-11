import { Component, OnInit } from '@angular/core';
import Inventory from '../../models/inventory';
import PurchaseEvent from '../../models/PurchaseEvent';
import {MatDialog} from '@angular/material';
import {SituationPopupComponent} from '../situation-popup/situation-popup.component';
import {BuyCoinsComponent} from './buy-coins/buy-coins.component';
import Deal from '../../models/deal';

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

  inventory: Inventory = {
    pumpServants: 0,
    pumpUpgrades: 0
  };

  openStore = false;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  private calcIncrement() {
    this.increment = this.inventory.pumpServants * 2 + this.inventory.pumpUpgrades * 10;
  }

  private toggleStore() {
    this.openStore = !this.openStore;
  }

  private increaseCurrency() {
    this.currency += this.increment;
  }

  private commitPurchase(purchaseEvent: PurchaseEvent) {
    this.currency -= purchaseEvent.cost;
    this.inventory[purchaseEvent.upgradeType]++;
    this.calcIncrement();
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
