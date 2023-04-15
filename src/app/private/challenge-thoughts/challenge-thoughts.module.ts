import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeThoughtsRoutingModule } from './challenge-thoughts-routing.module';
import { ScaleComponent } from './scale/scale.component';
import { ScoreComponent } from './score/score.component';
import { Challenge1Component } from './challenge1/challenge1.component';
import { Challenge2Component } from './challenge2/challenge2.component';
import { Challenge3Component } from './challenge3/challenge3.component';
import { Challenge4Component } from './challenge4/challenge4.component';
import { Challenge5Component } from './challenge5/challenge5.component';
import { Challenge6Component } from './challenge6/challenge6.component';
import { Challenge7Component } from './challenge7/challenge7.component';


@NgModule({
  declarations: [
    ScaleComponent,
    ScoreComponent,
    Challenge1Component,
    Challenge2Component,
    Challenge3Component,
    Challenge4Component,
    Challenge5Component,
    Challenge6Component,
    Challenge7Component
  ],
  imports: [
    CommonModule,
    ChallengeThoughtsRoutingModule
  ]
})
export class ChallengeThoughtsModule { }
