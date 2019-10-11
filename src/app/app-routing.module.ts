import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EarthComponent} from './pages/earth/earth.component';
import { StageComponent } from './pages/stage/stage.component';

const routes: Routes = [
  { path: 'stage', component: StageComponent },
  { path: 'earth', component: EarthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
