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
import { MyhealthythoughtsComponent } from './myhealthythoughts/myhealthythoughts.component';



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

    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrivateRoutingModule,
    ToastModule
  ]
})
export class PrivateModule { }
