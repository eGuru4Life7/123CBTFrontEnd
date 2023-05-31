import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DangerCentreRoutingModule } from './danger-centre-routing.module';
import { DangerCentreScaleComponent } from './danger-centre-scale/danger-centre-scale.component';
import {DangerCenter1Component  } from './danger-center1/danger-center1.component';
import {DangerCenter2Component  } from './danger-center2/danger-center2.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FightScoreComponent } from './fight-score/fight-score.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AudioComponent } from './audio/audio.component';
import { FoodadviceComponent } from './foodadvice/foodadvice.component';
import { SleepadviceComponent } from './sleepadvice/sleepadvice.component';
import { UsefultipsComponent } from './usefultips/usefultips.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    DangerCentreScaleComponent,
    FightScoreComponent,
    DangerCenter1Component,
    DangerCenter2Component,
    AudioComponent,
    FoodadviceComponent,
    SleepadviceComponent,
    UsefultipsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgApexchartsModule,
    TranslateModule,
    DangerCentreRoutingModule,
  ]
})
export class DangerCentreModule { }
