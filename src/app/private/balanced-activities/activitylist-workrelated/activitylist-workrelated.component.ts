import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-activitylist-workrelated',
  templateUrl: './activitylist-workrelated.component.html',
  styleUrls: ['./activitylist-workrelated.component.scss']
})
export class ActivitylistWorkrelatedComponent implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus( { code: 'B_A', completed: 80, nextCode: 'R' });
   }

  ngOnInit(): void {
  }

}
