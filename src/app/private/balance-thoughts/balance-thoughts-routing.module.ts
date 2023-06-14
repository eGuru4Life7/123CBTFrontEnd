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
import { CountGuard } from 'src/app/services/guards/count.guard';


const routes: Routes = [
  {
    path:'',
    component:ScaleComponent,
   // canActivate: [CountGuard],
    data: { code: 'B_T', completed: 10, nextCode: 'P_S' }
  },
  {
    path:'scale',
    component:ScaleComponent,
   // canActivate: [CountGuard],
    data: { code: 'B_T', completed: 10, nextCode: 'P_S' }
  },
  {
    path:'score',
    component:ScoreComponent,
    canActivate: [CountGuard],
    data: { code: 'B_T', completed: 20, nextCode: 'P_S' }
  },
  {
    path:'start',
    component:StartComponent,
    canActivate: [CountGuard],
    data: { code: 'B_T', completed: 30, nextCode: 'P_S' }
  },
  {
    path:'tips',
    component:TipsComponent,
    canActivate: [CountGuard],
    data: { code: 'B_T', completed: 40, nextCode: 'P_S' }
  },
  {
    path:'diary-week3',
    component:DiaryWeek3Component,
    canActivate: [CountGuard],
    data: { code: 'B_T', completed: 50, nextCode: 'P_S' }
  },
  {
    path:'situation',
    component:SituationComponent,
  //  canActivate: [CountGuard],
   // data: { code: 'B_T', completed: 60, nextCode: 'P_S' }
  },
  {
    path:'circle',
    component:CircleComponent,
   // canActivate: [CountGuard],
    data: { code: 'B_T', completed: 70, nextCode: 'P_S' }
  },
  {
    path:'evidence',
    component:EvidenceComponent,
    canActivate: [CountGuard],
    data: { code: 'B_T', completed: 85, nextCode: 'P_S' }
  },
  {
    path:'alternative',
    component:AlternativeComponent
   
  },
  {
    path:'end',
    component:EndComponent,
    canActivate: [CountGuard],
    data: { code: 'B_T', completed: 100, nextCode: 'P_S' }
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalanceThoughtsRoutingModule { }
