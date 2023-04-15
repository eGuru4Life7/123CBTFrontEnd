import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StressModule } from './stress/stress.module';
import { DangerCentreModule } from './danger-centre/danger-centre.module';
import { ExamineThoughtsModule } from './examine-thoughts/examine-thoughts.module';
import { ChallengeThoughtsModule } from './challenge-thoughts/challenge-thoughts.module';
import { BalanceThoughtsModule } from './balance-thoughts/balance-thoughts.module';
import { ProblemSolvingModule } from './problem-solving/problem-solving.module';
import { BalancedActivitiesModule } from './balanced-activities/balanced-activities.module';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'stress',
    loadChildren: ()=>StressModule
  },
  {
    path:'dangercenter',
    loadChildren: ()=>DangerCentreModule
  }, {
    path:'examinethoughts',
    loadChildren: ()=>ExamineThoughtsModule
  },{
    path:'challengethoughts',
    loadChildren: ()=>ChallengeThoughtsModule
  },
  {
    path:'balancethought',
    loadChildren: ()=>BalanceThoughtsModule
  },
  {
    path:'problemsolving',
    loadChildren: ()=>ProblemSolvingModule
  },
  {
    path:'balancedActivities',
    loadChildren: ()=>BalancedActivitiesModule
  },
  {
    path:'profile',
    component:ProfileComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
