import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-relation6',
  templateUrl: './relation6.component.html',
  styleUrls: ['./relation6.component.scss']
})
export class Relation6Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'R', completed: 60, nextCode: 'S_W' });
   }

  ngOnInit(): void {
  }

}
