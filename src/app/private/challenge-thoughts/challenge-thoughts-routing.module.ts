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


const routes: Routes = [
  {
    path: '',
    component: ScaleComponent,
  
  },
  {
    path: 'scale',
    component: ScaleComponent,
  
  },
  {
    path: 'score',
    component: ScoreComponent,
    
  },
  {
    path: 'start',
    component: StartComponent,
   
  },
  {
    path: 'tips',
    component: TipsComponent,
   
  },
  {
    path: 'diary-week2',
    component: DiaryWeek2Component,
  
  },
  {
    path: 'situation',
    component: SituationComponent,
  
  },
  {
    path: 'circle',
    component: CircleComponent,
   
  },
  {
    path: 'evidence',
    component: EvidenceComponent,
   
  },
  {
    path: 'end',
    component: EndComponent,
   
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeThoughtsRoutingModule { }
