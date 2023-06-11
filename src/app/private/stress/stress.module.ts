import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StressRoutingModule } from './stress-routing.module';
import { StressIntroComponent } from './stress-intro/stress-intro.component';
import { StressCausesComponent } from './stress-causes/stress-causes.component';
import { StressSymptomsComponent } from './stress-symptoms/stress-symptoms.component';
import { KhushiMuhammadComponent } from './khushi-muhammad/khushi-muhammad.component';
import { KhatoonBibiComponent } from './khatoon-bibi/khatoon-bibi.component';
import { IntroToDangerCenterComponent } from './intro-to-danger-center/intro-to-danger-center.component';
import { StressScaleComponent } from './stress-scale/stress-scale.component';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  
  declarations: [
    StressIntroComponent,
    StressCausesComponent,
    StressSymptomsComponent,
    KhushiMuhammadComponent,
    KhatoonBibiComponent,
    IntroToDangerCenterComponent,
    StressScaleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TooltipModule,
    TranslateModule,
    StressRoutingModule,
    SharedModule
  ]
})
export class StressModule { }
