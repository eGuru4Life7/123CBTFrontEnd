import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScaleComponent } from './scale/scale.component';
import { ScoreComponent } from './score/score.component';
import { StartComponent } from './start/start.component';
import { WriteActivitiesComponent } from './write-activities/write-activities.component';
import { FirstStepComponent } from './first-step/first-step.component';
import { FirstStep2Component } from './first-step2/first-step2.component';
import { ActivitylistComponent } from './activitylist/activitylist.component';
import { ActivitylistCreativeComponent } from './activitylist-creative/activitylist-creative.component';
import { ActivitylistRecreationalComponent } from './activitylist-recreational/activitylist-recreational.component';
import { ActivitylistWorkrelatedComponent } from './activitylist-workrelated/activitylist-workrelated.component';
import { ActivitylistSocialspiritualComponent } from './activitylist-socialspiritual/activitylist-socialspiritual.component';
import { EndComponent } from './end/end.component';
// import { TestComponent } from "./test/test.component";

const routes: Routes = [
  {
    path: '',
    component: ScaleComponent,

  },
  {
    path: 'score',
    component: ScoreComponent,
   
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'writeactivities',
    component: WriteActivitiesComponent
  },
  {
    path: 'firststep',
    component: FirstStepComponent
  },
  {
    path: 'firststep2',
    component: FirstStep2Component
  },
  {
    path: 'activitylist',
    component: ActivitylistComponent
  },
  {
    path: 'creative',
    component: ActivitylistCreativeComponent
  },
  {
    path: 'recreational',
    component: ActivitylistRecreationalComponent
  },
  {
    path: 'workrelated',
    component: ActivitylistWorkrelatedComponent
  },
  {
    path: 'socialandspiritual',
    component: ActivitylistSocialspiritualComponent
  },
  {
    path: 'end',
    component: EndComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalancedActivitiesRoutingModule { }
