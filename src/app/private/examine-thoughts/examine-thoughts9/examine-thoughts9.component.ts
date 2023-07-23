import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-examine-thoughts9',
  templateUrl: './examine-thoughts9.component.html',
  styleUrls: ['./examine-thoughts9.component.scss']
})
export class ExamineThoughts9Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({code:'E_T',completed:90,nextCode:'C_T' });
   }

  ngOnInit(): void {
  }

}
