import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScaleComponent } from './scale/scale.component';
import { ScoreComponent } from './score/score.component';
import { StartComponent } from './start/start.component';
import { TipsComponent } from './tips/tips.component';
import { DiaryWeek2Component } from './diary-week2/diary-week2.component';
import { SituationComponent } from './situation/situation.component';
import { CircleComponent } from './circle/circle.component';
import { EvidenceComponent } from './evidence/evidence.component';
import { EndComponent } from './end/end.component';
import { CountGuard } from 'src/app/services/guards/count.guard';

const routes: Routes = [
  {
    path: '',
    component: ScaleComponent,
    //canActivate: [CountGuard],
    data: { code: 'C_T', completed: 10, nextCode: 'B_T' }
  },
  {
    path: 'scale',
    component: ScaleComponent,
    //canActivate: [CountGuard],
    data: { code: 'C_T', completed: 10, nextCode: 'B_T' }
  },
  {
    path: 'score',
    component: ScoreComponent,
    //canActivate: [CountGuard],
    data: { code: 'C_T', completed: 20, nextCode: 'B_T' }
  },
  {
    path: 'start',
    component: StartComponent,
    canActivate: [CountGuard],
    data: { code: 'C_T', completed: 30, nextCode: 'B_T' }
  },
  {
    path: 'tips',
    component: TipsComponent,
    canActivate: [CountGuard],
    data: { code: 'C_T', completed: 40, nextCode: 'B_T' }
  },
  {
    path: 'diary-week2',
    component: DiaryWeek2Component,
   // canActivate: [CountGuard],
   // data: { code: 'C_T', completed: 50, nextCode: 'B_T' }
  },
  {
    path: 'situation',
    component: SituationComponent,
   // canActivate: [CountGuard],
    //data: { code: 'C_T', completed: 60, nextCode: 'B_T' }
  },
  {
    path: 'circle',
    component: CircleComponent,
    canActivate: [CountGuard],
    data: { code: 'C_T', completed: 75, nextCode: 'B_T' }
  },
  {
    path: 'evidence',
    component: EvidenceComponent,
    canActivate: [CountGuard],
    data: { code: 'C_T', completed: 85, nextCode: 'B_T' }
  },
  {
    path: 'end',
    component: EndComponent,
    canActivate: [CountGuard],
    data: { code: 'C_T', completed: 100, nextCode: 'B_T' }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeThoughtsRoutingModule { }
