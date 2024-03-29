import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-expedition',
  templateUrl: './expedition.component.html',
  styleUrls: ['./expedition.component.scss']
})
export class ExpeditionComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  step = 1;

  next() {
    this.step++;
  }
  goBack() {
    this.router.navigateByUrl('stage');
  }
}
