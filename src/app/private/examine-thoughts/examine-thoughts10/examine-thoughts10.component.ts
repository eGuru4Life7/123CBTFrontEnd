import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';

@Component({
  selector: 'app-examine-thoughts10',
  templateUrl: './examine-thoughts10.component.html',
  styleUrls: ['./examine-thoughts10.component.scss']
})
export class ExamineThoughts10Component implements OnInit {

  userThirdMod:any;
  constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({code:'E_T',completed:100,nextCode:'C_T' });
   }

  ngOnInit(): void {
    this.userThirdMod = this.localService.getCurrentUser().third_mod;
  }


}
