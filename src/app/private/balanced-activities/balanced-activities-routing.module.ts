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
import { CountGuard } from 'src/app/services/guards/count.guard';
// import { TestComponent } from "./test/test.component";

const routes: Routes = [
  /* {
  path:'test',
  component:TestComponent,
   canActivate: [CountGuard],
    data: { code: 'B_A', completed: 10, nextCode: 'R' }
}, */
  {
    path: '',
    component: ScaleComponent,
   // canActivate: [CountGuard],
    data: { code: 'B_A', completed: 20, nextCode: 'R' }
  },
  {
    path: 'score',
    component: ScoreComponent,
    //canActivate: [CountGuard],
    data: { code: 'B_A', completed: 30, nextCode: 'R' }
  },
  {
    path: 'start',
    component: StartComponent,
    canActivate: [CountGuard],
    data: { code: 'B_A', completed: 40, nextCode: 'R' }
  },
  {
    path: 'writeactivities',
    component: WriteActivitiesComponent,
    canActivate: [CountGuard],
    data: { code: 'B_A', completed: 50, nextCode: 'R' }
  },
  {
    path: 'firststep',
    component: FirstStepComponent,
    canActivate: [CountGuard],
    data: { code: 'B_A', completed: 60, nextCode: 'R' }
  },
  {
    path: 'firststep2',
    component: FirstStep2Component,
    canActivate: [CountGuard],
    data: { code: 'B_A', completed: 70, nextCode: 'R' }
  },
  {
    path: 'activitylist',
    component: ActivitylistComponent,
    canActivate: [CountGuard],
    data: { code: 'B_A', completed: 80, nextCode: 'R' }
  },
  {
    path: 'creative',
    component: ActivitylistCreativeComponent,
    canActivate: [CountGuard],
    data: { code: 'B_A', completed: 75, nextCode: 'R' }
  },
  {
    path: 'recreational',
    component: ActivitylistRecreationalComponent,
    canActivate: [CountGuard],
    data: { code: 'B_A', completed: 80, nextCode: 'R' }
  },
  {
    path: 'workrelated',
    component: ActivitylistWorkrelatedComponent,
    canActivate: [CountGuard],
    data: { code: 'B_A', completed: 80, nextCode: 'R' }
  },
  {
    path: 'socialandspiritual',
    component: ActivitylistSocialspiritualComponent,
    canActivate: [CountGuard],
    data: { code: 'B_A', completed: 95, nextCode: 'R' }
  },
  {
    path: 'end',
    component: EndComponent,
    canActivate: [CountGuard],
    data: { code: 'B_A', completed: 100, nextCode: 'R' }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalancedActivitiesRoutingModule { }
