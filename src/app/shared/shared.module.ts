import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrevNextButtonComponent } from './prev-next-button/prev-next-button.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [PrevNextButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    PrevNextButtonComponent
  ]

})
export class SharedModule { }
