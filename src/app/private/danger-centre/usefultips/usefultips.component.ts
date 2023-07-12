import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-usefultips',
  templateUrl: './usefultips.component.html',
  styleUrls: ['./usefultips.component.scss']
})
export class UsefultipsComponent implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({code:'D_C',nextCode:'E_T',completed:90});
   }

  ngOnInit(): void {
  }

}
