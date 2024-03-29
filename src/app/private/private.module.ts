import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LockedModalComponent } from './shared/locked-modal/locked-modal.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ChangePasswordModalComponent } from './shared/change-password-modal/change-password-modal.component';
import { EmailSuccesModalComponent } from './shared/email-succes-modal/email-succes-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MyhealthythoughtsComponent } from './myhealthythoughts/myhealthythoughts.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    LockedModalComponent,
    DownloadsComponent,
    ProfileEditComponent,
    ChangePasswordModalComponent,
    EmailSuccesModalComponent,
    MyhealthythoughtsComponent,
    ProgressComponent
    
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrivateRoutingModule,
    ToastModule,
    TranslateModule,
    NgApexchartsModule,
    SharedModule
   
  ]
})
export class PrivateModule { }
