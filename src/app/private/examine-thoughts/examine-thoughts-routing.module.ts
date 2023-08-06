import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangerCenterScaleComponent } from "./danger-center-scale/danger-center-scale.component";
import { DangerCenterScoreComponent } from "./danger-center-score/danger-center-score.component";
import { ExamineThoughts1Component } from "./examine-thoughts1/examine-thoughts1.component";
import { ExamineThoughts2Component } from "./examine-thoughts2/examine-thoughts2.component";
import { ExamineThoughts3Component } from "./examine-thoughts3/examine-thoughts3.component";
import { ExamineThoughts4Component } from "./examine-thoughts4/examine-thoughts4.component";
import { ExamineThoughts5Component } from "./examine-thoughts5/examine-thoughts5.component";
import { ExamineThoughts6Component } from "./examine-thoughts6/examine-thoughts6.component";
import { ExamineThoughts7Component } from "./examine-thoughts7/examine-thoughts7.component";
import { ExamineThoughts8Component } from "./examine-thoughts8/examine-thoughts8.component";
import { ExamineThoughts9Component } from "./examine-thoughts9/examine-thoughts9.component";
import { ExamineThoughts10Component } from "./examine-thoughts10/examine-thoughts10.component";


const routes: Routes = [
  {
    path:'',
    component:DangerCenterScaleComponent,
 
  },
  {
    path:'danger-center-scale',
    component:DangerCenterScaleComponent,
    
  },
  {
    path:'danger-center-score',
    component:DangerCenterScoreComponent,
     
  },
  {
    path:'examine1',
    component:ExamineThoughts1Component,
     
  },
  {
    path:'examine2',
    component:ExamineThoughts2Component,
     
  },
  {
    path:'examine3',
    component:ExamineThoughts3Component,
     
  },
  {
    path:'examine4',
    component:ExamineThoughts4Component,
     
  },
  {
    path:'examine5',
    component:ExamineThoughts5Component,
     
  },
  {
    path:'examine6',
    component:ExamineThoughts6Component,
     
  },
  {
    path:'examine7',
    component:ExamineThoughts7Component,
    
  },
  {
    path:'examine8',
    component:ExamineThoughts8Component
  },
  {
    path:'examine9',
    component:ExamineThoughts9Component,
   
  },
  {
    path:'examine10',
    component:ExamineThoughts10Component,
     
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamineThoughtsRoutingModule { }
