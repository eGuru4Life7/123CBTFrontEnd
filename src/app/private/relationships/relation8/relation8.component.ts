import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-relation8',
  templateUrl: './relation8.component.html',
  styleUrls: ['./relation8.component.scss']
})
export class Relation8Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'R', completed: 75, nextCode: 'S_W' });
   }

  ngOnInit(): void {
  }

}
