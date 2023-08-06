import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-relation2',
  templateUrl: './relation2.component.html',
  styleUrls: ['./relation2.component.scss']
})
export class Relation2Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'R', completed: 25, nextCode: 'S_W' });
   }

  ngOnInit(): void {
  }

}
