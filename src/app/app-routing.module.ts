import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StageComponent } from './pages/stage/stage.component';
import {LevelSelectionComponent} from "./pages/level-selection/level-selection.component";


const routes: Routes = [
  { path: 'stage', component: StageComponent},
  { path: 'level-selection', component: LevelSelectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
