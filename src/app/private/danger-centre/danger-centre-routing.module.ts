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




const routes: Routes = [
  {
    path:'',
    component:DangerCentreScaleComponent,
   
  },
  {
    path: 'scale',
    component: DangerCentreScaleComponent,
  
  },
  {
    path: 'fightscore',
    component: FightScoreComponent,
  },
  {
    path: '1',
    component: DangerCenter1Component,
  },
  {
    path: 'audio',
    component: AudioComponent,
  },
  {
    path: 'foodadvice',
    component: FoodadviceComponent,
  },
  {
    path: 'sleepadvice',
    component: SleepadviceComponent,
  },
  {
    path: 'usefultips',
    component: UsefultipsComponent,
  },
  {
    path: '2',
    component: DangerCenter2Component,
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DangerCentreRoutingModule { }
