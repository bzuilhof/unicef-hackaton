import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LevelSelectionComponent } from './pages/level-selection/level-selection.component';
import { StageComponent } from './pages/stage/stage.component';
import { EarthComponent } from './pages/earth/earth.component';
import { StageViewComponent } from './pages/stage/stage-view/stage-view.component';
import { StageStoreComponent } from './pages/stage/stage-store/stage-store.component';
import { SituationPopupComponent } from './pages/situation-popup/situation-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialog, MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LevelSelectionComponent,
    StageComponent,
    EarthComponent,
    StageViewComponent,
    StageStoreComponent,
    SituationPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    MatDialog
  ],
  entryComponents: [
    SituationPopupComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
