import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-situation-popup',
  templateUrl: './situation-popup.component.html',
  styleUrls: ['./situation-popup.component.scss']
})
export class SituationPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SituationPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {situation: string },
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  goToLevel() {
    this.dialogRef.close();
    this.router.navigateByUrl('stage')
  }

  private get title(): string {
    switch (this.data.situation) {
      case 'syria': return "OORLOG IN SYRIË";
      case 'bahamas': return "HELP DE KINDEREN OP DE BAHAMA'S";
      case 'jemen': return "HONGERSNOOD IN JEMEN";
    }
    return ''
  }

  private get body(): string {
    switch (this.data.situation) {
      case 'syria': return "Gevlucht voor het geweld met niet meer dan je kunt dragen. Niet meer naar school, niet meer buiten spelen met vriendjes. Vaders die niet meer thuis komen en moeders die er het beste van maken in een geïmproviseerde tent. Het is het leven dat miljoenen Syrische kinderen leiden.";
      case 'bahamas': return "We werken wereldwijd en kunnen daardoor vrijwel altijd direct noodhulp bieden. Dat is bijvoorbeeld nu het geval op de Bahama's, waar we alle kinderen die zijn getroffen door orkaan Dorian willen helpen.";
      case 'jemen': return "De oorlog in Jemen duurt inmiddels al bijna vier jaar. Kinderen lijden onder de voortdurende onveiligheid, ondervoeding en de angst en het feit dat hun dagelijks leven op z’n kop staat. Er is een gebrek aan alles, zelfs aan water en medische zorg.";
    }
    return ''
  }
}
