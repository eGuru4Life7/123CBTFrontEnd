import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeThoughtsRoutingModule } from './challenge-thoughts-routing.module';
import { ScaleComponent } from './scale/scale.component';
import { ScoreComponent } from './score/score.component';
import { StartComponent } from './start/start.component';
import { TipsComponent } from './tips/tips.component';
import { DiaryWeek2Component } from './diary-week2/diary-week2.component';
import { SituationComponent } from './situation/situation.component';
import { CircleComponent } from './circle/circle.component';
import { EvidenceComponent } from './evidence/evidence.component';
import { EndComponent } from './end/end.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    ScaleComponent,
    ScoreComponent,
    StartComponent,
    TipsComponent,
    DiaryWeek2Component,
    SituationComponent,
    CircleComponent,
    EvidenceComponent,
    EndComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgApexchartsModule,
    ChallengeThoughtsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ChallengeThoughtsModule { }
