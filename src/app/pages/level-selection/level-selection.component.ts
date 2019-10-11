import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-level-selection',
  templateUrl: './level-selection.component.html',
  styleUrls: ['./level-selection.component.scss']
})
export class LevelSelectionComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToLevel(level) {
    this.router.navigateByUrl('stage');
  }

}
