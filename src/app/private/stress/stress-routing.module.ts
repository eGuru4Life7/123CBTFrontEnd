import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroToDangerCenterComponent } from './intro-to-danger-center/intro-to-danger-center.component';
import { KhatoonBibiComponent } from './khatoon-bibi/khatoon-bibi.component';
import { KhushiMuhammadComponent } from './khushi-muhammad/khushi-muhammad.component';
import { StressCausesComponent } from './stress-causes/stress-causes.component';
import { StressIntroComponent } from './stress-intro/stress-intro.component';
import { StressScaleComponent } from './stress-scale/stress-scale.component';
import { StressSymptomsComponent } from './stress-symptoms/stress-symptoms.component';

const routes: Routes = [
  {
    path:'intro',
    component:StressIntroComponent
  },
  {
    path:'causes',
    component:StressCausesComponent
  },
  {
    path:'symptoms',
    component:StressSymptomsComponent
  },
  {
    path:'khushi-Muhammad',
    component:KhushiMuhammadComponent
  },
  {
    path:'khatoon-bibi',
    component:KhatoonBibiComponent
  },
  {
    path:'intro-to-danger-center',
    component:IntroToDangerCenterComponent
  },
  {
    path:'scale',
    component:StressScaleComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StressRoutingModule { }
