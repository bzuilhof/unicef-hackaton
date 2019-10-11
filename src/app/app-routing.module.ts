import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EarthComponent} from './pages/earth/earth.component';
import { StageComponent } from './pages/stage/stage.component';
import {LevelSelectionComponent} from './pages/level-selection/level-selection.component';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'stage', component: StageComponent },
  { path: 'earth', component: EarthComponent },
  { path: 'level-selection', component: LevelSelectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
