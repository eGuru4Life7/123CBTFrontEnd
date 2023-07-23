import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-first-step2',
  templateUrl: './first-step2.component.html',
  styleUrls: ['./first-step2.component.scss']
})
export class FirstStep2Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus( { code: 'B_A', completed: 70, nextCode: 'R' });
   }

  ngOnInit(): void {
  }

}
