import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';

@Component({
  selector: 'app-foodadvice',
  templateUrl: './foodadvice.component.html',
  styleUrls: ['./foodadvice.component.scss']
})
export class FoodadviceComponent implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({code:'D_C',nextCode:'E_T',completed:60});
   }

  ngOnInit(): void {
  }

}
