import { Component, Input, OnInit } from '@angular/core';
import Facility from '../../../models/Facility';

@Component({
  selector: 'app-stage-inventory',
  templateUrl: './stage-inventory.component.html',
  styleUrls: ['./stage-inventory.component.scss']
})
export class StageInventoryComponent implements OnInit {


  @Input() facilities: string[];
  constructor() { }

  ngOnInit() {
  }

}
