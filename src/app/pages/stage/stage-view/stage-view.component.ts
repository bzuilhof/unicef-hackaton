import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stage-view',
  templateUrl: './stage-view.component.html',
  styleUrls: ['./stage-view.component.scss']
})
export class StageViewComponent implements OnInit {

  assetImage = 'pump.jpg';

  @Output() increase: EventEmitter<any> = new EventEmitter();

  constructor() { }
  ngOnInit() {
  }

  increaseCurrency() {
    this.increase.emit();
  }
}
