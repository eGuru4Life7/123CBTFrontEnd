import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { ModuleService } from 'src/app/services/module.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  user:any ={};
  email:any = "";
  dir: any;
  constructor(private userService:UserServiceService,private messageService:MessageService,private route:Router,private translate:TranslateService) { }

  ngOnInit(): void {
    var lang :any = localStorage.getItem("lang");
    this.dir= localStorage.getItem("dir");
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }
  sendEmail(){
    let data = Math.random().toString(36).slice(2, 10);
    this.user.subject = "Password Reset";
    this.user.body = "Your Reset Code Is "+data;
    this.user.to = this.email;
    this.user.password = data;
    this.userService.forgotPassword(this.user).subscribe((res:any)=>{
      if(res){
        this.messageService.add({severity:'success', summary:'Success', detail:res.message});
        setTimeout(() => {
          this.route.navigate(['../auth']);
        }, 1000);
      }
    });
  }
}
