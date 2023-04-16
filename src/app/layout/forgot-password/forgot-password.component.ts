import { Component, OnInit } from '@angular/core';
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
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  }
  sendEmail(){
    let data = Math.random().toString(36).slice(2, 10);
    this.user.subject = "Password Reset";
    this.user.body = "Your Reset Code Is <b>"+data+" </b>";
    this.user.email = this.email;
    this.userService.forgotPassword(this.user).subscribe((res:any)=>{
      if(res){

      }
    });
  }
}
