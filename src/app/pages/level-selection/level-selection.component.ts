import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SituationPopupComponent} from '../situation-popup/situation-popup.component';
import {Router} from '@angular/router';

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
    const dialog = this.dialog.open(SituationPopupComponent, {
      // height: '400px',
      width: '80%',
      data: {situation: level}
    });
  }

  onBackPressed() {
    this.router.navigateByUrl('earth');
  }
}
