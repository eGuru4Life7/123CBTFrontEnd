import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-relation1',
  templateUrl: './relation1.component.html',
  styleUrls: ['./relation1.component.scss']
})
export class Relation1Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'R', completed: 10, nextCode: 'S_W' });
   }

  ngOnInit(): void {
  }

}
