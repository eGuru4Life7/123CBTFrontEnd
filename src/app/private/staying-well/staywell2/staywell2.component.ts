import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-staywell2',
  templateUrl: './staywell2.component.html',
  styleUrls: ['./staywell2.component.scss']
})
export class Staywell2Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'S_W', completed: 50, nextCode: '' });
   }

  ngOnInit(): void {
  }

}
