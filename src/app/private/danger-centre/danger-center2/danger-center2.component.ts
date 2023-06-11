import { Component, OnInit } from '@angular/core';
import { LocalCacheService } from 'src/app/services/local-cache.service';

@Component({
  selector: 'app-danger-center2',
  templateUrl: './danger-center2.component.html',
  styleUrls: ['./danger-center2.component.scss']
})
export class DangerCenter2Component implements OnInit {
  userSecondMod:any;
  constructor(private localCache:LocalCacheService) { }

  ngOnInit(): void {
    this.userSecondMod = this.localCache.getCurrentUser().second_mod;
  }

}
