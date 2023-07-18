import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

  // Declare ViewChild and ElementRef
  @ViewChild('passwordInput') passwordInput!: ElementRef<HTMLInputElement>;

    // Boolean variable to track password visibility
  hidePassword: boolean = true;

// Method to toggle password visibility
togglePasswordVisibility() {
  const input = this.passwordInput.nativeElement;
  input.type = this.hidePassword ? 'password' : 'text';
  this.hidePassword = !this.hidePassword;
}

  user:any= {};
  dir:any ="ltr";
  constructor(private userService:UserServiceService,private route:Router,private localService:LocalCacheService,
    private messageService:MessageService,private translate:TranslateService) { }

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    localStorage.setItem("dir","ltr");
    localStorage.setItem("lang","en");
    this.dir= "ltr";
  }

  changeLanguage(lang:any){
    if(lang == "ur"){
      localStorage.setItem("dir","rtl");
      localStorage.setItem("lang","ur");
      this.dir= "rtl";
    }else if(lang == "pun"){
      localStorage.setItem("dir","rtl");
      localStorage.setItem("lang","pun");
      this.dir= "rtl";
    }
    else if(lang == "gm"){
      localStorage.setItem("dir","rtl");  
      localStorage.setItem("lang","gm");
      this.dir= "rtl";
    }
    else{
      localStorage.setItem("dir","ltr");
      localStorage.setItem("lang","en");
      this.dir= "ltr";
    }
    
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    
  }


  loginUser() {
    this.userService.login(this.user).toPromise().then((resp: any) => {
      if (resp.success) {
        this.messageService.add({severity:'success', summary:'Success', detail:'Succesfully Login'});
        this.localService.setLoginData(resp.data);
        setTimeout(() => {
          this.route.navigate(['../loading']);
        }, 1000);
       
      } else {
        this.messageService.add({severity:'error', summary:'warning', detail:resp.message});
        
       // this.clear();
      }
    });
  }
  clear() {
    //this.messageService.clear();
  }
}
