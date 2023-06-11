import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Staywell1Component } from './staywell1/staywell1.component';

const routes: Routes = [
  {
    path:'',
    component:Staywell1Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StayingWellRoutingModule { }
