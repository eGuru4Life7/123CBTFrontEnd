import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-staywell3',
  templateUrl: './staywell3.component.html',
  styleUrls: ['./staywell3.component.scss'],
  providers:[MessageService]
})
export class Staywell3Component implements OnInit {
  user: any= {};
  mail :any = "";
  constructor(private localService:LocalCacheService,private moduleService:ModuleService,private messageService:MessageService) { }
 
  ngOnInit(): void {
  }

  sendMail(){
    this.user.subject = "What did you learn from these stories?";
    this.user.body = this.mail;
    this.user.to = this.localService.getCurrentUser().email;
    this.moduleService.sendStayingWellEmail(this.user).subscribe((res:any)=>{
      if(res){
        this.messageService.add({severity:'success', summary:'Success', detail:res.message});
      }
    });
  }
}
