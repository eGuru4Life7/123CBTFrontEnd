import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-examine-thoughts7',
  templateUrl: './examine-thoughts7.component.html',
  styleUrls: ['./examine-thoughts7.component.scss']
})
export class ExamineThoughts7Component implements OnInit {

  diary:any ={};
  currentUser: any;
  constructor(private moduleService: ModuleService, private localService: LocalCacheService,private router:Router) {

  }

  ngOnInit(): void {
    this.currentUser = this.localService.getCurrentUser();
    this.diary.uid = this.currentUser.id;
  }
  
  async addThoughtDairy() {
    await this.moduleService.addThoughtDairy(this.diary).toPromise().then((res: any) => {
      if (res.success) {
        this.router.navigate(['../examinethoughts/examine8']);
      }
    })
  }
}
