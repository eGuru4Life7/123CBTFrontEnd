import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LockedModalComponent } from './shared/locked-modal/locked-modal.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    LockedModalComponent,
    ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
