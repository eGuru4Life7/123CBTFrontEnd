import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpetcRoutingModule } from './helpetc-routing.module';
import { FaqsComponent } from './faqs/faqs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    FaqsComponent
  ],
  imports: [
    CommonModule,
    HelpetcRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class HelpetcModule { }
