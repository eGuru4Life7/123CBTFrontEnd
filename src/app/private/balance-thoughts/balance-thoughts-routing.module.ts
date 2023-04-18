import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScaleComponent } from './scale/scale.component';
import { ScoreComponent } from './score/score.component';
import { StartComponent } from './start/start.component';
import { TipsComponent } from './tips/tips.component';
import { DiaryWeek3Component } from './diary-week3/diary-week3.component';
import { SituationComponent } from './situation/situation.component';
import { CircleComponent } from './circle/circle.component';
import { EvidenceComponent } from './evidence/evidence.component';
import { AlternativeComponent } from './alternative/alternative.component';

import { EndComponent } from './end/end.component';


const routes: Routes = [
  {
    path:'',
    component:ScaleComponent
  },
  {
    path:'scale',
    component:ScaleComponent
  },
  {
    path:'score',
    component:ScoreComponent
  },
  {
    path:'start',
    component:StartComponent
  },
  {
    path:'tips',
    component:TipsComponent
  },
  {
    path:'diary-week3',
    component:DiaryWeek3Component
  },
  {
    path:'situation',
    component:SituationComponent
  },
  {
    path:'circle',
    component:CircleComponent
  },
  {
    path:'evidence',
    component:EvidenceComponent
  },
  {
    path:'alternative',
    component:AlternativeComponent
  },
  {
    path:'end',
    component:EndComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalanceThoughtsRoutingModule { }
