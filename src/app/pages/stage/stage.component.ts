import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {

  currency = 0;
  currencyImage = 'drop.png';
  assetImage = 'pump.jpg';

  constructor() { }

  ngOnInit() {
  }

  increaseCurrency() {
    this.currency++;
  }
}
