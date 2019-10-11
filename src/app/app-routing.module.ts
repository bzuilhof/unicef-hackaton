import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EarthComponent} from './pages/earth/earth.component';


const routes: Routes = [{path: 'earth', component: EarthComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
