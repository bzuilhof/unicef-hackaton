import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {rotateOutUpRight, jello, rubberBand, shake, rotateOut, rotateOutUpLeft} from 'ng-animate';
import {transition, trigger, useAnimation} from '@angular/animations';

@Component({
  selector: 'app-stage-view',
  templateUrl: './stage-view.component.html',
  styleUrls: ['./stage-view.component.scss'],
  animations: [
    trigger('jello', [transition('* => *', useAnimation(jello))]),
    trigger('rubberBand', [transition('* => *', useAnimation(rubberBand))]),
    trigger('shake', [transition('* => *', useAnimation(shake))]),
    trigger('rotateOutUpRight', [transition('* => *', useAnimation(rotateOutUpRight, {
      params: { timing: 1}
    }))]),
    trigger('rotateOutUpLeft', [transition('* => *', useAnimation(rotateOutUpLeft, {
      params: { timing: 1}
    }))]),
    trigger('rotateOut', [transition('* => *', useAnimation(rotateOutUpLeft, {
      params: { timing: 1}
    }))]),
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
  rotateOutUpRight: any;
  rotateOutUpLeft: any;
  rotateOut: any;
  dropSprite1 = false;
  dropSprite2 = false;
  dropSprite3 = false;
  dropSprite4 = false;
  dropSprite5 = false;

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
    this.splash();
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

  private splash() {
    const randomNum = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    switch (randomNum) {
      case 1:
        this.dropSprite1 = true;
        setTimeout( () => {
          this.dropSprite1 = false;
        }, 5);
        break;
      case 2:
        this.dropSprite2 = true;
        setTimeout( () => {
          this.dropSprite2 = false;
        }, 5);
        break;
      case 3:
        this.dropSprite3 = true;
        setTimeout( () => {
          this.dropSprite3 = false;
        }, 5);
        break;
      case 4:
        this.dropSprite4 = true;
        setTimeout( () => {
          this.dropSprite4 = false;
        }, 5);
        break;
      case 5:
        this.dropSprite5 = true;
        setTimeout( () => {
          this.dropSprite5 = false;
        }, 5);
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
