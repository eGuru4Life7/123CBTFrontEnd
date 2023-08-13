import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { ModuleService } from 'src/app/services/module.service';
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  currentUser: any = {};
  modules: any = [];
  modulesStatus: any = {};
  moduleStatus1: any = {};
  moduleStatus2: any = {};
  moduleStatus3: any = {};
  moduleStatus4: any = {};
  moduleStatus5: any = {};
  moduleStatus6: any = {};
  moduleStatus7: any = {};
  moduleStatus8: any = {};
  moduleStatus9: any = {};
  isShow: any = false;
  dir:any ="ltr";
  imageClass :any ="";
  lang:any = [
    {code:'en',class:'flag flag-country-us'},
    {code:'ur',class:'flag flag-country-pk'},
    {code:'pun',class:'flag flag-country-pk'},
    {code:'gm',class:'flag flag-country-in'},
    {code:'spa',class:'flag flag-country-sn'},
    {code:'ch',class:'flag flag-country-cn'},
    {code:'hindi',class:'flag flag-country-in'}
  ]
  constructor(private localService: LocalCacheService, private moduleService: ModuleService, private route: Router,private translate: TranslateService) {
    var lang :any = localStorage.getItem("lang");
    this.dir= localStorage.getItem("dir");
    this.imageClass = this.lang.filter((d:any)=>d.code==lang)[0].class;
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    
  }
  module1: any = {};
  module2: any = {};
  module3: any = {};
  module4: any = {};
  module5: any = {};
  module6: any = {};
  module7: any = {};
  module8: any = {};
  module9: any = {};

  ngOnInit(): void {
    this.currentUser = this.localService.getCurrentUser();
    this.getAllModule();
    this.getAllModuleStatusById();
  }

  changeLanguage(lang:any){
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    localStorage.setItem("lang",lang)
    if(lang == "ur" || lang == "pun" || lang == "gm" || lang == "hindi"){
      localStorage.setItem("dir","rtl");
      this.imageClass = this.lang.filter((d:any)=>d.code==lang)[0].class;
      this.dir= "rtl";
    }
    else{
      localStorage.setItem("dir","ltr");
      this.imageClass = this.lang.filter((d:any)=>d.code==lang)[0].class;
      this.dir= "ltr";
    }
    



    // if(lang == "ur"){
    //   localStorage.setItem("dir","rtl");  
    //   this.dir= "rtl";
    // }else if(lang == "pun"){
    //   localStorage.setItem("dir","rtl");  
    //   this.dir= "rtl";
    // }
    // else if(lang == "gm"){
    //   localStorage.setItem("dir","rtl");  
    //   this.dir= "rtl";
    // }
    // else if(lang == "spa"){
    //   localStorage.setItem("dir","ltr");  
    //   this.dir= "ltr";
    // }
    // else{
    //   localStorage.setItem("dir","ltr");
    //   this.dir= "ltr";
    // }
    const currentUrl = this.route.url;
    this.route.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.route.navigate([currentUrl]);
    });
  }

  getAllModule() {
    this.moduleService.getAllModule().subscribe((res: any) => {
      if (res) {
        this.modules = res.data;
        this.module1 = this.modules.filter((s: any) => s.code == 'S')[0].status;
        this.module2 = this.modules.filter((s: any) => s.code == 'D_C')[0].status;
        this.module3 = this.modules.filter((s: any) => s.code == 'E_T')[0].status;
        this.module4 = this.modules.filter((s: any) => s.code == 'C_T')[0].status;
        this.module5 = this.modules.filter((s: any) => s.code == 'B_T')[0].status;
        this.module6 = this.modules.filter((s: any) => s.code == 'P_S')[0].status;
        this.module7 = this.modules.filter((s: any) => s.code == 'B_A')[0].status;
        this.module8 = this.modules.filter((s: any) => s.code == 'R')[0].status;
        this.module9 = this.modules.filter((s: any) => s.code == 'S_W')[0].status;
      }
    });

  }

  getAllModuleStatusById() {
    this.moduleService.getAllModuleStatusById(this.currentUser.id).subscribe((res: any) => {
      if (res) {
        this.modulesStatus = res.data;
        this.moduleStatus1 = this.modulesStatus.filter((s: any) => s.name == 'S')[0];
        this.moduleStatus2 = this.modulesStatus.filter((s: any) => s.name == 'D_C')[0];
        this.moduleStatus3 = this.modulesStatus.filter((s: any) => s.name == 'E_T')[0];
        this.moduleStatus4 = this.modulesStatus.filter((s: any) => s.name == 'C_T')[0];
        this.moduleStatus5 = this.modulesStatus.filter((s: any) => s.name == 'B_T')[0];
        this.moduleStatus6 = this.modulesStatus.filter((s: any) => s.name == 'P_S')[0];
        this.moduleStatus7 = this.modulesStatus.filter((s: any) => s.name == 'B_A')[0];
        this.moduleStatus8 = this.modulesStatus.filter((s: any) => s.name == 'R')[0];
        this.moduleStatus9 = this.modulesStatus.filter((s: any) => s.name == 'S_W')[0];
      }
    });
  }
  logout() {
    this.localService.logoutUser();
    this.route.navigate(['/auth']);

  }
}
