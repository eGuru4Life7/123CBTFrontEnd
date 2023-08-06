import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-relation7',
  templateUrl: './relation7.component.html',
  styleUrls: ['./relation7.component.scss']
})
export class Relation7Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'R', completed: 70, nextCode: 'S_W' });
   }

  ngOnInit(): void {
  }

}
