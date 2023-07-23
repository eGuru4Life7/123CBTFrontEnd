import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Staywell1Component } from './staywell1/staywell1.component';
import { Staywell2Component } from './staywell2/staywell2.component';

import { Staywell3Component } from './staywell3/staywell3.component';
import { Staywell4Component } from './staywell4/staywell4.component';
import { CompleteComponent } from './complete/complete.component';
import { CertificateComponent } from './certificate/certificate.component';

const routes: Routes = [
  {
    path:'',
    component:Staywell1Component,
  },
  {
    path:'staywell2',
    component:Staywell2Component,
  },
  {
    path:'staywell3',
    component:Staywell3Component,
    
  },
  {
    path:'staywell4',
    component:Staywell4Component,
    
  },
  {
    path:'complete',
    component:CompleteComponent
    
    
  },
  {
    path:'certificate',
    component:CertificateComponent
    
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StayingWellRoutingModule { }
