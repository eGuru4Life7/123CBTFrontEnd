import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelationshipsRoutingModule } from './relationships-routing.module';
import { Relation1Component } from './relation1/relation1.component';
import { Relation2Component } from './relation2/relation2.component';
import { Relation3Component } from './relation3/relation3.component';
import { Relation4Component } from './relation4/relation4.component';
import { Relation5Component } from './relation5/relation5.component';
import { Relation6Component } from './relation6/relation6.component';
import { Relation7Component } from './relation7/relation7.component';
import { Relation8Component } from './relation8/relation8.component';
import { Relation9Component } from './relation9/relation9.component';
import { Relation10Component } from './relation10/relation10.component';
import { Relation11Component } from './relation11/relation11.component';
import { Relation12Component } from './relation12/relation12.component';
import { Relation13Component } from './relation13/relation13.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    Relation1Component,
    Relation2Component,
    Relation3Component,
    Relation4Component,
    Relation5Component,
    Relation6Component,
    Relation7Component,
    Relation8Component,
    Relation9Component,
    Relation10Component,
    Relation11Component,
    Relation12Component,
    Relation13Component
  ],
  imports: [
    CommonModule,
    RelationshipsRoutingModule,
    TranslateModule,
    SharedModule
  ]
})
export class RelationshipsModule { }
