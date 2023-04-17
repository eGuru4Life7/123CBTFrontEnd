import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceThoughtsRoutingModule } from './balance-thoughts-routing.module';
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


@NgModule({
  declarations: [
    ScaleComponent,
    ScoreComponent,
    StartComponent,
    TipsComponent,
    DiaryWeek3Component,
    SituationComponent,
    CircleComponent,
    EvidenceComponent,
    AlternativeComponent,
    EndComponent
  ],
  imports: [
    CommonModule,
    BalanceThoughtsRoutingModule
  ]
})
export class BalanceThoughtsModule { }
