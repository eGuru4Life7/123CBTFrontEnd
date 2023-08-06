import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';

@Component({
  selector: 'app-stress-causes',
  templateUrl: './stress-causes.component.html',
  styleUrls: ['./stress-causes.component.scss']
})
export class StressCausesComponent implements OnInit {

  constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code:'S',completed:36,nextCode:'D_C'});
   }

  ngOnInit(): void {
  }

}
