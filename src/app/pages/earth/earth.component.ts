import { Component, OnInit } from '@angular/core';
import {fadeIn, zoomIn, zoomInX, zoomOut} from 'ng-animate';
import {animate, state, style, transition, trigger, useAnimation} from '@angular/animations';
import {Router} from '@angular/router';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.scss'],
  animations: [
    trigger('fade', [transition('* => *', useAnimation(fadeIn, {
      params: { fromOpacity: 0, toOpacity: 100, timing: 1}
    }))]),
    ]
})
export class EarthComponent implements OnInit {
  fade: any;
  zoom: any;
  public zoomEarth = false;
  constructor(private router: Router) {}

  ngOnInit() {
  }

  private clicked() {
    this.zoomEarth = true;
    this.router.navigateByUrl('level-selection');
  }
  private onBackPressed() {
    this.router.navigateByUrl('');
  }
}
