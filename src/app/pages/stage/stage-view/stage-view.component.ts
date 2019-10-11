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
  drop1: any;
  drop2: any;
  drop3: any;
  drop4: any;

  @Output() increase: EventEmitter<any> = new EventEmitter();

  constructor() { }
  ngOnInit() {
    this.loadAudio();
  }

  increaseCurrency() {
    this.playAnimation ++;
    this.increase.emit();
    if (this.playAnimation === 4) {
      this.playAnimation = 1;
    }
    this.playRandomAudio();
  }

  private playRandomAudio() {
    const randomNum = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    switch (randomNum) {
      case 1:
        this.drop1.play();
        break;
      case 2:
        this.drop2.play();
        break;
      case 3:
        this.drop3.play();
        break;
      case 4:
        this.drop4.play();
        break;
    }

  }

  private loadAudio() {
    this.drop1 = new Audio();
    this.drop2 = new Audio();
    this.drop3 = new Audio();
    this.drop4 = new Audio();
    this.drop1.src = 'assets/sounds/drop1.wav';
    this.drop2.src = 'assets/sounds/drop2.wav';
    this.drop3.src = 'assets/sounds/drop3.wav';
    this.drop4.src = 'assets/sounds/drop4.wav';
  }
}
