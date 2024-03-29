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
  isShow: boolean = false;
  imageClass: any = "";
  // Method to toggle password visibility
  togglePasswordVisibility() {
    const input = this.passwordInput.nativeElement;
    input.type = this.hidePassword ? 'password' : 'text';
    this.hidePassword = !this.hidePassword;
  }

  user: any = {};
  dir: any = "ltr";
  lang: any = [
    { code: 'en', class: 'flag flag-country-us' },
    { code: 'ur', class: 'flag flag-country-pk' },
    { code: 'pun', class: 'flag flag-country-pk' },
    { code: 'gm', class: 'flag flag-country-in' },
    { code: 'spa', class: 'flag flag-country-sn' },
    { code: 'ch', class: 'flag flag-country-cn' },
    { code: 'hindi', class: 'flag flag-country-in' },
    { code: 'ar', class: 'flag flag-country-sa' }
  ]
  constructor(private userService: UserServiceService, private route: Router, private localService: LocalCacheService,
    private messageService: MessageService, private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    localStorage.setItem("dir", "ltr");
    localStorage.setItem("lang", "en");
    this.imageClass = this.lang.filter((d: any) => d.code == "en")[0].class;
    this.dir = "ltr";
    setTimeout(() => {
      this.isShow = true;
    }, 2000);
  }

  changeLanguage(lang: any) {
    if (lang == "ur" || lang == "pun" || lang == "ar") {
      localStorage.setItem("dir", "rtl");
      localStorage.setItem("lang", lang);
      this.imageClass = this.lang.filter((d: any) => d.code == lang)[0].class;
      this.dir = "rtl";
    }
    else {
      localStorage.setItem("dir", "ltr");
      localStorage.setItem("lang", lang);
      this.imageClass = this.lang.filter((d: any) => d.code == lang)[0].class;
      this.dir = "ltr";
    }

    this.translate.setDefaultLang(lang);
    this.translate.use(lang);

  }


  loginUser() {
    this.userService.login(this.user).subscribe((resp: any) => {
      if (resp.success) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Succesfully Login' });
        this.localService.setLoginData(resp.data);
        this.localService.setRememberMe(this.user.isRememberMe);
        setTimeout(() => {
          this.route.navigate(['../loading']);
        }, 1000);

      } else {
        this.messageService.add({ severity: 'error', summary: 'warning', detail: resp.message });

      }
    });
  }
  closeModal() {
    this.isShow = false;
  }
}
