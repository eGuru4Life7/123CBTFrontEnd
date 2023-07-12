import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';

@Component({
  selector: 'app-stress-symptoms',
  templateUrl: './stress-symptoms.component.html',
  styleUrls: ['./stress-symptoms.component.scss']
})
export class StressSymptomsComponent implements OnInit {

  constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code:'S',completed:52,nextCode:'D_C'});
   }

  ngOnInit(): void {
  }

}
