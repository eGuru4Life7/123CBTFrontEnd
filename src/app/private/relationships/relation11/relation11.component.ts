import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-relation11',
  templateUrl: './relation11.component.html',
  styleUrls: ['./relation11.component.scss']
})
export class Relation11Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'R', completed: 90, nextCode: 'S_W' });
   }

  ngOnInit(): void {
  }

}
