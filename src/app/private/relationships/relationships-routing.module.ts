import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Relation1Component } from './relation1/relation1.component';
import { Relation2Component } from './relation2/relation2.component';
import { Relation3Component } from './relation3/relation3.component';
import { Relation4Component } from './relation4/relation4.component';
import { Relation5Component } from './relation5/relation5.component';
import { Relation6Component } from './relation6/relation6.component';
import { Relation7Component } from './relation7/relation7.component';
import { Relation8Component } from './relation8/relation8.component';
import { Relation9Component } from './relation9/relation9.component';
import { Relation10Component } from './relation10/relation10.component';
import { Relation11Component } from './relation11/relation11.component';
import { Relation12Component } from './relation12/relation12.component';
import { Relation13Component } from './relation13/relation13.component';
import { CountGuard } from 'src/app/services/guards/count.guard';

const routes: Routes = [

  {
    path:'',
    component:Relation1Component,
    canActivate:[CountGuard],
    data: { code: 'R', completed: 10, nextCode: 'S_W' }
  },
  {
    path:'aggressive',
    component:Relation2Component,
    canActivate:[CountGuard],
    data: { code: 'R', completed: 20, nextCode: 'S_W' }
  },
  {
    path:'passive',
    component:Relation3Component,
    canActivate:[CountGuard],
    data: { code: 'R', completed: 20, nextCode: 'S_W' }
  },
  {
    path:'manipulative',
    component:Relation4Component,
    canActivate:[CountGuard],
    data: { code: 'R', completed: 30, nextCode: 'S_W' }
  },
  {
    path:'assertive',
    component:Relation5Component,
    canActivate:[CountGuard],
    data: { code: 'R', completed: 40, nextCode: 'S_W' }
  },
  {
    path:'howtobeassertive',
    component:Relation6Component,
    canActivate:[CountGuard],
    data: { code: 'R', completed: 50, nextCode: 'S_W' }
  },
  {
    path:'fog',
    component:Relation7Component,
    canActivate:[CountGuard],
    data: { code: 'R', completed: 60, nextCode: 'S_W' }
  },
  {
    path:'cooldown',
    component:Relation8Component,
    canActivate:[CountGuard],
    data: { code: 'R', completed: 70, nextCode: 'S_W' }
  },
  {
    path:'howtosayno',
    component:Relation9Component,
    canActivate:[CountGuard],
    data: { code: 'R', completed: 80, nextCode: 'S_W' }
  },
  {
    path:'brokentape',
    component:Relation10Component,
    canActivate:[CountGuard],
    data: { code: 'R', completed: 90, nextCode: 'S_W' }
  },
  {
    path:'conflicts',
    component:Relation11Component,
    canActivate:[CountGuard],
    data: { code: 'R', completed: 90, nextCode: 'S_W' }
  },
  {
    path:'goldenrule1',
    component:Relation12Component,
    canActivate:[CountGuard],
    data: { code: 'R', completed: 90, nextCode: 'S_W' }
  },
  {
    path:'goldenrule2',
    component:Relation13Component,
    canActivate:[CountGuard],
    data: { code: 'R', completed: 100, nextCode: 'S_W' }
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelationshipsRoutingModule { }
