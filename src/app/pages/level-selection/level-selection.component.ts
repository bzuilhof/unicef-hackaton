import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog } from '@angular/material/dialog';
import {SituationPopupComponent} from '../situation-popup/situation-popup.component';


@Component({
  selector: 'app-level-selection',
  templateUrl: './level-selection.component.html',
  styleUrls: ['./level-selection.component.scss']
})
export class LevelSelectionComponent implements OnInit {

  constructor(
    private router: Router,
    public dialog: MatDialog
  ) {
  }


  ngOnInit() {
  }

  goToLevel(level) {
    let dialog = this.dialog.open(SituationPopupComponent, {
      // height: '400px',
      width: '80%',
      data: {situation: level}
    });
  }

}
