import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangerCenter1Component } from './danger-center1/danger-center1.component';
import { DangerCenter2Component } from './danger-center2/danger-center2.component';
import { DangerCentreScaleComponent } from './danger-centre-scale/danger-centre-scale.component';
import { FightScoreComponent } from './fight-score/fight-score.component';

import { AudioComponent } from './audio/audio.component'; 
import { FoodadviceComponent } from './foodadvice/foodadvice.component';  
import { SleepadviceComponent } from './sleepadvice/sleepadvice.component';
import { UsefultipsComponent } from './usefultips/usefultips.component';

import { CountGuard } from 'src/app/services/guards/count.guard';


const routes: Routes = [{
  path:'scale',
  component:DangerCentreScaleComponent,
    canActivate:[CountGuard],
    data:{ code:'D_C',nextCode:'E_T',completed:30}
},
{
  path:'fightscore',
  component:FightScoreComponent,
    canActivate:[CountGuard],
    data:{ code:'D_C',nextCode:'E_T',completed:60}
},
{
  path:'1',
  component:DangerCenter1Component,
    canActivate:[CountGuard],
    data:{ code:'D_C',nextCode:'E_T',completed:80}
},
{
  path:'audio',
  component:AudioComponent,
    canActivate:[CountGuard],
    data:{ code:'D_C',nextCode:'E_T',completed:30}
},
{
  path:'foodadvice',
  component:FoodadviceComponent,
    canActivate:[CountGuard],
    data:{ code:'D_C',nextCode:'E_T',completed:30}
},
{
  path:'sleepadvice',
  component:SleepadviceComponent,
    canActivate:[CountGuard],
    data:{ code:'D_C',nextCode:'E_T',completed:30}
},
{
  path:'usefultips',
  component:UsefultipsComponent,
    canActivate:[CountGuard],
    data:{ code:'D_C',nextCode:'E_T',completed:30}
},
{
  path:'2',
  component:DangerCenter2Component,
    canActivate:[CountGuard],
    data:{ code:'D_C',completed:100,nextCode:'E_T'}
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DangerCentreRoutingModule { }
