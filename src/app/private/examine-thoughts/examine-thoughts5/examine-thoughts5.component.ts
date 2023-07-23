import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-examine-thoughts5',
  templateUrl: './examine-thoughts5.component.html',
  styleUrls: ['./examine-thoughts5.component.scss']
})
export class ExamineThoughts5Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({code:'E_T',completed:50,nextCode:'C_T' });
   }

  ngOnInit(): void {
  }

}
