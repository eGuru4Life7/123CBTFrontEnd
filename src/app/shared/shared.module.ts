import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrevNextButtonComponent } from './prev-next-button/prev-next-button.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ImgDirectiveComponent } from './img-directive/img-directive.component';



@NgModule({
  declarations: [PrevNextButtonComponent, ImgDirectiveComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    PrevNextButtonComponent,
    ImgDirectiveComponent
  ]

})
export class SharedModule { }
