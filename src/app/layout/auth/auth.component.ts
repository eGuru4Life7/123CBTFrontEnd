import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  user:any= {};
  constructor(private userService:UserServiceService,private route:Router,private localService:LocalCacheService,
    private messageService:MessageService,private translate:TranslateService) { }

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  changeLanguage(lang:any){
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
