import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-relation3',
  templateUrl: './relation3.component.html',
  styleUrls: ['./relation3.component.scss']
})
export class Relation3Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'R', completed: 30, nextCode: 'S_W' });
   }

  ngOnInit(): void {
  }

}
