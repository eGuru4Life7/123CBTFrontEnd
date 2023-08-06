import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-relation12',
  templateUrl: './relation12.component.html',
  styleUrls: ['./relation12.component.scss']
})
export class Relation12Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'R', completed: 95, nextCode: 'S_W' });
   }

  ngOnInit(): void {
  }

}
