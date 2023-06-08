import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamineThoughtsRoutingModule } from './examine-thoughts-routing.module';
import { DangerCenterScaleComponent } from './danger-center-scale/danger-center-scale.component';
import { DangerCenterScoreComponent } from './danger-center-score/danger-center-score.component';
import { ExamineThoughts1Component } from './examine-thoughts1/examine-thoughts1.component';
import { ExamineThoughts2Component } from './examine-thoughts2/examine-thoughts2.component';
import { ExamineThoughts3Component } from './examine-thoughts3/examine-thoughts3.component';
import { ExamineThoughts4Component } from './examine-thoughts4/examine-thoughts4.component';
import { ExamineThoughts5Component } from './examine-thoughts5/examine-thoughts5.component';
import { ExamineThoughts6Component } from './examine-thoughts6/examine-thoughts6.component';
import { ExamineThoughts7Component } from './examine-thoughts7/examine-thoughts7.component';
import { ExamineThoughts8Component } from './examine-thoughts8/examine-thoughts8.component';
import { ExamineThoughts9Component } from './examine-thoughts9/examine-thoughts9.component';
import { ExamineThoughts10Component } from './examine-thoughts10/examine-thoughts10.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TranslateModule } from '@ngx-translate/core';
import { PrevNextButtonComponent } from '../shared/prev-next-button/prev-next-button.component';


@NgModule({
  declarations: [
    DangerCenterScaleComponent,
    DangerCenterScoreComponent,
    ExamineThoughts1Component,
    ExamineThoughts2Component,
    ExamineThoughts3Component,
    ExamineThoughts4Component,
    ExamineThoughts5Component,
    ExamineThoughts6Component,
    ExamineThoughts7Component,
    ExamineThoughts8Component,
    ExamineThoughts9Component,
    ExamineThoughts10Component,
    PrevNextButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    ExamineThoughtsRoutingModule
  ]
})
export class ExamineThoughtsModule { }
