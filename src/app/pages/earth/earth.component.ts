import { Component, OnInit } from '@angular/core';
import {fadeIn, zoomIn, zoomInX, zoomOut} from 'ng-animate';
import {animate, state, style, transition, trigger, useAnimation} from '@angular/animations';

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
  constructor() { }

  ngOnInit() {
  }

  private clicked() {
    this.zoomEarth = true;
  }
}
