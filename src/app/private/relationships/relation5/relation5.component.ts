import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-relation5',
  templateUrl: './relation5.component.html',
  styleUrls: ['./relation5.component.scss']
})
export class Relation5Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'R', completed: 50, nextCode: 'S_W' });
   }

  ngOnInit(): void {
  }

}
