import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-danger-centre-scale',
  templateUrl: './danger-centre-scale.component.html',
  styleUrls: ['./danger-centre-scale.component.scss']
})
export class DangerCentreScaleComponent implements OnInit {

  currentUser:any = {};
  stress:any ={
   q_1:0,
   q_2:0,
   q_3:0,
   q_4:0,
   q_5:0,
   q_6:0,
   q_7:0,
   q_8:0,
   q_9:0,
   q_10:0
  };
 constructor(private moduleService:ModuleService,private localService:LocalCacheService,private router:Router) { 
  this.localService.updateModuleStatus({  code: 'D_C', completed: 10, nextCode: 'E_T'  });
 }
 ngOnInit(): void {
   this.currentUser = this.localService.getCurrentUser();
 }


 saveModule(){
   this.stress.uid = this.currentUser.id;
   this.stress.score = this.stress.q_1 + this.stress.q_2 +this.stress.q_3 +this.stress.q_4 +this.stress.q_5 +this.stress.q_6 +
   this.stress.q_7 +this.stress.q_8 +this.stress.q_9 +this.stress.q_10;
   this.stress.date = Date.now();
   this.stress.module ='D_C';
   this.moduleService.addModule(this.stress).toPromise().then((res:any)=>{
     if(res.success){
       this.router.navigate(['../dangercenter/fightscore']);
     }
   })
 }
}
