import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-activitylist-creative',
  templateUrl: './activitylist-creative.component.html',
  styleUrls: ['./activitylist-creative.component.scss']
})
export class ActivitylistCreativeComponent implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus( { code: 'B_A', completed: 75, nextCode: 'R' });
   }

  ngOnInit(): void {
  }

}
