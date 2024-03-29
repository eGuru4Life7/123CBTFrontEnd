import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';
import { MainComponent } from './layout/main/main.component';
import { PrivateModule } from './private/private.module';
import { CanActivateAuthLayoutGuard } from './services/guards/can-activate-auth-layout.guard';
import { SignUpComponent } from './layout/sign-up/sign-up.component';
import { EvidenceComponent } from './layout/evidence/evidence.component';
import { DisclaimerComponent } from './layout/disclaimer/disclaimer.component';
import { ForgotPasswordComponent } from './layout/forgot-password/forgot-password.component';
import { StartComponent } from './layout/start/start.component';
import { LoaderComponent } from './loader/loader.component';
import { LoginGuard } from './services/guards/login-guard.guard';
const routes: Routes = [
  {
    path:'auth',
    component:AuthComponent,
    canActivate:[LoginGuard]
  },
  {
    path:'signup',
    component:SignUpComponent
  },
  {
    path:'disclaimer',
    component:DisclaimerComponent
  },
  {
    path:'evidence',
    component:EvidenceComponent
  },
  {
    path:'forgotpassword',
    component:ForgotPasswordComponent
  },
  {
    path:'signup-start',
    component:StartComponent
  },
  {
    path:'loading',
    component:LoaderComponent
  },
  {
    path:'',
    component:MainComponent,
    canActivate:[CanActivateAuthLayoutGuard],
    children:[
      {
        path: '',
        loadChildren: () => PrivateModule
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
