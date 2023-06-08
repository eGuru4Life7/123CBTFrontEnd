import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-myhealthythoughts',
  templateUrl: './myhealthythoughts.component.html',
  styleUrls: ['./myhealthythoughts.component.scss']
})
export class MyhealthythoughtsComponent implements OnInit {
  currentUser: any;
  uid: any;
  healthyThoughts: any;

  constructor(private moduleService:ModuleService,private localService:LocalCacheService,private router:Router) { }

 ngOnInit(): void {
   this.currentUser = this.localService.getCurrentUser();
   this.getAllHealthyThoughts();
 }


 getAllHealthyThoughts(){
   this.uid = this.currentUser.id;
   this.moduleService.getAllHealthyThoughts(this.uid).toPromise().then((res:any)=>{
     if(res.success){
        this.healthyThoughts = res.data;       
     }
   })
 }

}
