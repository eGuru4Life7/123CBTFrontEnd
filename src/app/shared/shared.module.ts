import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrevNextButtonComponent } from './prev-next-button/prev-next-button.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ImgDirectiveComponent } from './img-directive/img-directive.component';
import { SvgDashboardComponent } from './svg-dashboard/svg-dashboard.component';



@NgModule({
  declarations: [PrevNextButtonComponent, ImgDirectiveComponent, SvgDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    PrevNextButtonComponent,
    ImgDirectiveComponent,
    SvgDashboardComponent
  ]

})
export class SharedModule { }
