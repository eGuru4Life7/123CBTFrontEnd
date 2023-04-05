import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DangerCentreRoutingModule } from './danger-centre-routing.module';
import { DangerCentreScaleComponent } from './danger-centre-scale/danger-centre-scale.component';
import {DangerCenter1Component  } from './danger-center1/danger-center1.component';
import {DangerCenter2Component  } from './danger-center2/danger-center2.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DangerCentreScaleComponent,
    DangerCenter1Component,
    DangerCenter2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    DangerCentreRoutingModule
  ]
})
export class DangerCentreModule { }
