import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-activitylist-socialspiritual',
  templateUrl: './activitylist-socialspiritual.component.html',
  styleUrls: ['./activitylist-socialspiritual.component.scss']
})
export class ActivitylistSocialspiritualComponent implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus( { code: 'B_A', completed: 95, nextCode: 'R' });
   }

  ngOnInit(): void {
  }

}
