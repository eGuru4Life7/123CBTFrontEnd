import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StayingWellRoutingModule } from './staying-well-routing.module';
import { Staywell1Component } from './staywell1/staywell1.component';
import { Staywell2Component } from './staywell2/staywell2.component';
import { Staywell3Component } from './staywell3/staywell3.component';
import { Staywell4Component } from './staywell4/staywell4.component';


@NgModule({
  declarations: [
    Staywell1Component,
    Staywell2Component,
    Staywell3Component,
    Staywell4Component
  ],
  imports: [
    CommonModule,
    StayingWellRoutingModule
  ]
})
export class StayingWellModule { }
