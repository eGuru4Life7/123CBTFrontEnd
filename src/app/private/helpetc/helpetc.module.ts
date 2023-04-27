import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpetcRoutingModule } from './helpetc-routing.module';
import { FaqsComponent } from './faqs/faqs.component';


@NgModule({
  declarations: [
    FaqsComponent
  ],
  imports: [
    CommonModule,
    HelpetcRoutingModule
  ]
})
export class HelpetcModule { }
