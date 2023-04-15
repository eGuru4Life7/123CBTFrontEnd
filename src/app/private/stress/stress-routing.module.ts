import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroToDangerCenterComponent } from './intro-to-danger-center/intro-to-danger-center.component';
import { KhatoonBibiComponent } from './khatoon-bibi/khatoon-bibi.component';
import { KhushiMuhammadComponent } from './khushi-muhammad/khushi-muhammad.component';
import { StressCausesComponent } from './stress-causes/stress-causes.component';
import { StressIntroComponent } from './stress-intro/stress-intro.component';
import { StressScaleComponent } from './stress-scale/stress-scale.component';
import { StressSymptomsComponent } from './stress-symptoms/stress-symptoms.component';
import { CountGuard } from 'src/app/services/guards/count.guard';

const routes: Routes = [
  {
    path:'intro',
    component:StressIntroComponent,
    canActivate:[CountGuard],
    data:{ code:'S',completed:20}
  },
  {
    path:'causes',
    component:StressCausesComponent,
    canActivate:[CountGuard],
    data:{ code:'S',completed:36}
    
  },
  {
    path:'symptoms',
    component:StressSymptomsComponent,
    canActivate:[CountGuard],
    data:{ code:'S',completed:52}
  },
  {
    path:'khushi-Muhammad',
    component:KhushiMuhammadComponent,
    canActivate:[CountGuard],
    data:{ code:'S',completed:68}
  },
  {
    path:'khatoon-bibi',
    component:KhatoonBibiComponent,
    canActivate:[CountGuard],
    data:{ code:'S',completed:84}
  },
  {
    path:'intro-to-danger-center',
    component:IntroToDangerCenterComponent,
    canActivate:[CountGuard],
    data:{ code:'S',completed:100,nextCode:'D_C'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StressRoutingModule { }
