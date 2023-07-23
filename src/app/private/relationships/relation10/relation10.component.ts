import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-relation10',
  templateUrl: './relation10.component.html',
  styleUrls: ['./relation10.component.scss']
})
export class Relation10Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'R', completed: 85, nextCode: 'S_W' });
   }

  ngOnInit(): void {
  }

}
