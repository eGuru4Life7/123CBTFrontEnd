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
import { CountGuard } from 'src/app/services/guards/count.guard';


const routes: Routes = [

  {
    path: 'scale',
    component: ScaleComponent,
    canActivate: [CountGuard],
    data: { code: 'P_S', completed: 10, nextCode: 'B_A' }
  },
  {
    path: 'score',
    component: ScoreComponent,
    canActivate: [CountGuard],
    data: { code: 'P_S', completed: 20, nextCode: 'B_A' }
  },
  {
    path: 'intro',
    component: ProblemSolving1Component,
    canActivate: [CountGuard],
    data: { code: 'P_S', completed: 30, nextCode: 'B_A' }
  },
  {
    path: 'identifyproblems',
    component: ProblemSolving2Component,
    canActivate: [CountGuard],
    data: { code: 'P_S', completed: 40, nextCode: 'B_A' }
  },
  {
    path: 'solutions',
    component: ProblemSolving3Component,
    canActivate: [CountGuard],
    data: { code: 'P_S', completed: 50, nextCode: 'B_A' }
  },
  {
    path: 'compare',
    component: ProblemSolving4Component,
    canActivate: [CountGuard],
    data: { code: 'P_S', completed: 60, nextCode: 'B_A' }
  },
  {
    path: 'breakdown',
    component: ProblemSolving5Component,
    canActivate: [CountGuard],
    data: { code: 'P_S', completed: 70, nextCode: 'B_A' }
  },
  {
    path: 'execute',
    component: ProblemSolving6Component,
    canActivate: [CountGuard],
    data: { code: 'P_S', completed: 80, nextCode: 'B_A' }
  },
  {
    path: 'listdown',
    component: ProblemSolving7Component,
    canActivate: [CountGuard],
    data: { code: 'P_S', completed: 90, nextCode: 'B_A' }
  },
  {
    path: 'end',
    component: ProblemSolving8Component,
    canActivate: [CountGuard],
    data: { code: 'P_S', completed: 100, nextCode: 'B_A' }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemSolvingRoutingModule { }
