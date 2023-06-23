import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalancedActivitiesRoutingModule } from './balanced-activities-routing.module';
import { ScaleComponent } from './scale/scale.component';
import { ScoreComponent } from './score/score.component';
import { StartComponent } from './start/start.component';
import { WriteActivitiesComponent } from './write-activities/write-activities.component';
import { FirstStepComponent } from './first-step/first-step.component';
import { FirstStep2Component } from './first-step2/first-step2.component';
import { ActivitylistComponent } from './activitylist/activitylist.component';
import { EndComponent } from './end/end.component';
import { ActivitylistCreativeComponent } from './activitylist-creative/activitylist-creative.component';
import { ActivitylistRecreationalComponent } from './activitylist-recreational/activitylist-recreational.component';
import { ActivitylistWorkrelatedComponent } from './activitylist-workrelated/activitylist-workrelated.component';
import { ActivitylistSocialspiritualComponent } from './activitylist-socialspiritual/activitylist-socialspiritual.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ScaleComponent,
    ScoreComponent,
    StartComponent,
    WriteActivitiesComponent,
    FirstStepComponent,
    FirstStep2Component,
    ActivitylistComponent,
    EndComponent,
    ActivitylistCreativeComponent,
    ActivitylistRecreationalComponent,
    ActivitylistWorkrelatedComponent,
    ActivitylistSocialspiritualComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    ToastModule,
    TranslateModule,
    BalancedActivitiesRoutingModule,
    SharedModule
  ]
})
export class BalancedActivitiesModule { }
