import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss']
})
export class EndComponent implements OnInit {


  usersixthMod:any;
  constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus( { code: 'B_A', completed: 100, nextCode: 'R' });
   }

  ngOnInit(): void {
    this.usersixthMod = this.localService.getCurrentUser().sixth_mod;
  }
}
