import { Component, OnInit } from '@angular/core';
import Deal from '../../../models/deal';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-buy-coins',
  templateUrl: './buy-coins.component.html',
  styleUrls: ['./buy-coins.component.scss']
})
export class BuyCoinsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BuyCoinsComponent>,
  ) { }

  ngOnInit() {
  }

  private deals: Deal[] = [
    {coins: 3, price: 0.99 },
    {coins: 10, price: 2.49 },
    {coins: 50, price: 9.99 },
    {coins: 500, price: 79.99 },
  ]

  private buy(deal: Deal) {
    this.dialogRef.close(deal);
  }
}
