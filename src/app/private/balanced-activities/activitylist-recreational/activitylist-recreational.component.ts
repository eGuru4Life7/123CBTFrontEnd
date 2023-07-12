import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-activitylist-recreational',
  templateUrl: './activitylist-recreational.component.html',
  styleUrls: ['./activitylist-recreational.component.scss']
})
export class ActivitylistRecreationalComponent implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus( { code: 'B_A', completed: 75, nextCode: 'R' });
   }

  ngOnInit(): void {
  }

}
