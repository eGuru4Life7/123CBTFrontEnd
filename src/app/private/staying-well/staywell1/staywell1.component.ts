import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-staywell1',
  templateUrl: './staywell1.component.html',
  styleUrls: ['./staywell1.component.scss']
})
export class Staywell1Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'S_W', completed: 25, nextCode: '' });
   }

  ngOnInit(): void {
  }

}
