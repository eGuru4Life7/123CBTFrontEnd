import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';

@Component({
  selector: 'app-khatoon-bibi',
  templateUrl: './khatoon-bibi.component.html',
  styleUrls: ['./khatoon-bibi.component.scss']
})
export class KhatoonBibiComponent implements OnInit {

  
  constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code:'S',completed:84,nextCode:'D_C'});
   }


  ngOnInit(): void {
  }

}
