import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalancedActivitiesRoutingModule } from './balanced-activities-routing.module';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    BalancedActivitiesRoutingModule
  ]
})
export class BalancedActivitiesModule { }
