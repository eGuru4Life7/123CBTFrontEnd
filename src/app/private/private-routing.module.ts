import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangerCentreModule } from './danger-centre/danger-centre.module';
import { HomeComponent } from './home/home.component';
import { StressModule } from './stress/stress.module';
import { BalanceThoughtsModule } from './balance-thoughts/balance-thoughts.module';
import { ExamineThoughtsModule } from './examine-thoughts/examine-thoughts.module';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'stress',
    loadChildren: ()=>StressModule
  },
  {
    path:'dangercenter',
    loadChildren: ()=>DangerCentreModule
  }, {
    path:'examinethoughts',
    loadChildren: ()=>ExamineThoughtsModule
  },{
    path:'balancethought',
    loadChildren: ()=>BalanceThoughtsModule
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
