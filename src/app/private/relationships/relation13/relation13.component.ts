import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-relation13',
  templateUrl: './relation13.component.html',
  styleUrls: ['./relation13.component.scss']
})
export class Relation13Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'R', completed: 100, nextCode: 'S_W' });
   }

  ngOnInit(): void {
  }

}
