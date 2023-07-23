import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-examine-thoughts8',
  templateUrl: './examine-thoughts8.component.html',
  styleUrls: ['./examine-thoughts8.component.scss']
})
export class ExamineThoughts8Component implements OnInit {
  currentUser: any;
  dairy:any ={};
  constructor(private moduleService: ModuleService,private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({code:'E_T',completed:80,nextCode:'C_T' });
   }
  ngOnInit(): void {
    this.currentUser = this.localService.getCurrentUser();
    this.getThoughtDiaryById();
  }
  
  async getThoughtDiaryById() {
    await this.moduleService.getThoughtDiaryById(this.currentUser.id).toPromise().then((res: any) => {
      if (res.success) {
        this.dairy = res.data[0];
      }
    })
  }

}
