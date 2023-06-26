import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemSolvingRoutingModule } from './problem-solving-routing.module';
import { ScoreComponent } from './score/score.component';
import { ScaleComponent } from './scale/scale.component';
import { ProblemSolving1Component } from './problem-solving1/problem-solving1.component';
import { ProblemSolving2Component } from './problem-solving2/problem-solving2.component';
import { ProblemSolving3Component } from './problem-solving3/problem-solving3.component';
import { ProblemSolving4Component } from './problem-solving4/problem-solving4.component';
import { ProblemSolving5Component } from './problem-solving5/problem-solving5.component';
import { ProblemSolving6Component } from './problem-solving6/problem-solving6.component';
import { ProblemSolving7Component } from './problem-solving7/problem-solving7.component';
import { ProblemSolving8Component } from './problem-solving8/problem-solving8.component';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ScoreComponent,
    ScaleComponent,
    ProblemSolving1Component,
    ProblemSolving2Component,
    ProblemSolving3Component,
    ProblemSolving4Component,
    ProblemSolving5Component,
    ProblemSolving6Component,
    ProblemSolving7Component,
    ProblemSolving8Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgApexchartsModule,
    ProblemSolvingRoutingModule,
    TranslateModule,
    SharedModule
  ]
})
export class ProblemSolvingModule { }
