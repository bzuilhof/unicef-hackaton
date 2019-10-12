import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Upgrade from '../../../models/Upgrade';
import Facility from '../../../models/Facility';

@Component({
  selector: 'app-stage-store',
  templateUrl: './stage-store.component.html',
  styleUrls: ['./stage-store.component.scss']
})
export class StageStoreComponent implements OnInit {
  @Input() upgrades: Upgrade[];
  @Input() autoClickerEnabled: boolean;
  @Input() facilities: Facility[];
  @Input() currency: number;

  @Output() purchase: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  commitPurchase(cost: number, upgradeType: string) {
    this.purchase.emit({cost, upgradeType});
    this.audio = new Audio();
    this.audio.src = 'assets/sounds/kassa.mp3';
    this.audio.load();
    this.audio.play();
  }

  currentPrice(intialPrice: number, owned: number) {
    return Math.ceil(intialPrice * Math.pow(1.5, owned ));
  }
}
