import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-examine-thoughts2',
  templateUrl: './examine-thoughts2.component.html',
  styleUrls: ['./examine-thoughts2.component.scss']
})
export class ExamineThoughts2Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({code:'E_T',completed:20,nextCode:'C_T' });
   }

  ngOnInit(): void {
  }

}
