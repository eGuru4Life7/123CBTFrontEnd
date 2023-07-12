import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss']
})
export class EndComponent implements OnInit {

  userfourthMod:any;
  constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'C_T', completed: 100, nextCode: 'B_T' });
   }

  ngOnInit(): void {
    this.userfourthMod =this.localService.getCurrentUser().fourth_mod;
  }

}
