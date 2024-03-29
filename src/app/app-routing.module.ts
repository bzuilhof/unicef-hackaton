import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EarthComponent} from './pages/earth/earth.component';
import { StageComponent } from './pages/stage/stage.component';
import {LevelSelectionComponent} from './pages/level-selection/level-selection.component';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {ExpeditionComponent} from './pages/expedition/expedition.component';
import { InviteFriendComponent } from './pages/invite-friend/invite-friend.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'stage', component: StageComponent },
  { path: 'earth', component: EarthComponent },
  { path: 'level-selection', component: LevelSelectionComponent },
  { path: 'expedition', component: ExpeditionComponent },
  { path: 'invite', component: InviteFriendComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
