import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {jello, rubberBand, shake} from 'ng-animate';
import {transition, trigger, useAnimation} from '@angular/animations';

@Component({
  selector: 'app-stage-view',
  templateUrl: './stage-view.component.html',
  styleUrls: ['./stage-view.component.scss'],
  animations: [
    trigger('jello', [transition('* => *', useAnimation(jello))]),
    trigger('rubberBand', [transition('* => *', useAnimation(rubberBand))]),
    trigger('shake', [transition('* => *', useAnimation(shake))])
  ],
})
export class StageViewComponent implements OnInit {
  jello: any;
  rubberBand: any;
  shake: any;
  assetImage = 'waterput.png';
  playAnimation = 1;

  @Output() increase: EventEmitter<any> = new EventEmitter();

  constructor() { }
  ngOnInit() {
  }

  increaseCurrency() {
    this.playAnimation ++;
    this.increase.emit();
    if (this.playAnimation === 4) {
      this.playAnimation = 1;
    }
  }
}
