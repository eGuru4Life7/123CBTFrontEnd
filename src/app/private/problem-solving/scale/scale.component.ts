import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexStroke, ApexTooltip, ApexDataLabels } from 'ng-apexcharts';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { ModuleService } from 'src/app/services/module.service';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};
@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.scss']
})
export class ScaleComponent implements OnInit {

  currentUser:any = {};
  module:any ={
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
  this.localService.updateModuleStatus({ code: 'P_S', completed: 15, nextCode: 'B_A'  });
}
 ngOnInit(): void {
   this.currentUser = this.localService.getCurrentUser();
 }


 saveModule(){
   this.module.uid = this.currentUser.id;
   this.module.score = this.module.q_1 + this.module.q_2 +this.module.q_3 +this.module.q_4 +this.module.q_5 +this.module.q_6 +
   this.module.q_7 +this.module.q_8 +this.module.q_9 +this.module.q_10;
   this.module.date = Date.now();
   this.module.module ='P_S';
   this.moduleService.addModule(this.module).toPromise().then((res:any)=>{
     if(res.success){
       this.router.navigate(['../problemsolving/score']);
     }
   })
 }
}

