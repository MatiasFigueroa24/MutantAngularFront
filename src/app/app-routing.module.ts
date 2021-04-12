import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './proyecto/add/add.component';
import { ListComponent } from './proyecto/list/list.component';
import { Add2Component } from './proyecto/add2/add2.component';




const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent },
  { path: 'add2', component: Add2Component },
  {path: '**', component: ListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
