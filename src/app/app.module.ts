import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LevelSelectionComponent} from './pages/level-selection/level-selection.component';
import {StageComponent} from './pages/stage/stage.component';
import {EarthComponent} from './pages/earth/earth.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StageViewComponent} from './pages/stage/stage-view/stage-view.component';
import {StageStoreComponent} from './pages/stage/stage-store/stage-store.component';
import {SituationPopupComponent} from './pages/situation-popup/situation-popup.component';
import {MatDialog, MatDialogModule} from '@angular/material';
import { BuyCoinsComponent } from './pages/stage/buy-coins/buy-coins.component';

@NgModule({
  declarations: [
    AppComponent,
    LevelSelectionComponent,
    StageComponent,
    EarthComponent,
    StageViewComponent,
    StageStoreComponent,
    SituationPopupComponent,
    BuyCoinsComponent
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
    SituationPopupComponent,
    BuyCoinsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
