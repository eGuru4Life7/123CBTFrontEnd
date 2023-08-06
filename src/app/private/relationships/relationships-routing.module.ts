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


const routes: Routes = [

  {
    path:'',
    component:Relation1Component,
    
  },
  {
    path:'aggressive',
    component:Relation2Component,
    
  },
  {
    path:'passive',
    component:Relation3Component,
    
  },
  {
    path:'manipulative',
    component:Relation4Component,
    
  },
  {
    path:'assertive',
    component:Relation5Component,
    
  },
  {
    path:'howtobeassertive',
    component:Relation6Component,
    
  },
  {
    path:'fog',
    component:Relation7Component,
    
  },
  {
    path:'cooldown',
    component:Relation8Component,
    
  },
  {
    path:'howtosayno',
    component:Relation9Component,
    
  },
  {
    path:'brokentape',
    component:Relation10Component,
    
  },
  {
    path:'conflicts',
    component:Relation11Component,
    
  },
  {
    path:'goldenrule1',
    component:Relation12Component,
    
  },
  {
    path:'goldenrule2',
    component:Relation13Component,
    
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelationshipsRoutingModule { }
