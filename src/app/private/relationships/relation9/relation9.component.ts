import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-relation9',
  templateUrl: './relation9.component.html',
  styleUrls: ['./relation9.component.scss']
})
export class Relation9Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'R', completed: 80, nextCode: 'S_W' });
   }

  ngOnInit(): void {
  }

}
