import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-staywell4',
  templateUrl: './staywell4.component.html',
  styleUrls: ['./staywell4.component.scss'],
  providers:[MessageService]
})
export class Staywell4Component implements OnInit {
  user: any= {};
  mail :any = "";
  constructor(private localService:LocalCacheService,private moduleService:ModuleService,private route:Router,private messageService:MessageService) {
    this.localService.updateModuleStatus({ code: 'S_W', completed: 100, nextCode: '' });
   }
 
  ngOnInit(): void {
  }

  sendMail(){
    this.user.subject = "What are you going to do to stay well?";
    this.user.body = this.mail;
    this.user.to = this.localService.getCurrentUser().email;
    this.moduleService.sendStayingWellEmail(this.user).subscribe((res:any)=>{
      if(res){
        this.messageService.add({severity:'success', summary:'Success', detail:res.message});
        setTimeout(() => {
          this.route.navigate(['./stayingwell/complete']);       
        }, 1000);
      }
    });
  }
}
