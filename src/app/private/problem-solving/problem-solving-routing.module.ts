import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScaleComponent } from './scale/scale.component';
import { ScoreComponent } from './score/score.component';
import { ProblemSolving1Component } from './problem-solving1/problem-solving1.component';
import { ProblemSolving2Component } from './problem-solving2/problem-solving2.component';
import { ProblemSolving3Component } from './problem-solving3/problem-solving3.component';
import { ProblemSolving4Component } from './problem-solving4/problem-solving4.component';
import { ProblemSolving5Component } from './problem-solving5/problem-solving5.component';
import { ProblemSolving6Component } from './problem-solving6/problem-solving6.component';
import { ProblemSolving7Component } from './problem-solving7/problem-solving7.component';
import { ProblemSolving8Component } from './problem-solving8/problem-solving8.component';



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
    path: 'intro',
    component: ProblemSolving1Component,
  },
  {
    path: 'identifyproblems',
    component: ProblemSolving2Component,
  },
  {
    path: 'solutions',
    component: ProblemSolving3Component,
  },
  {
    path: 'compare',
    component: ProblemSolving4Component,
  },
  {
    path: 'breakdown',
    component: ProblemSolving5Component,
  },
  {
    path: 'execute',
    component: ProblemSolving6Component,
  },
  {
    path: 'listdown',
    component: ProblemSolving7Component,
  },
  {
    path: 'end',
    component: ProblemSolving8Component,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemSolvingRoutingModule { }
