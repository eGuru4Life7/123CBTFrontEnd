import { Component, OnInit } from '@angular/core';
import { LocalCacheService } from 'src/app/services/local-cache.service';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss']
})
export class EndComponent implements OnInit {

  userfourthMod:any;
  constructor(private localCache:LocalCacheService) { }

  ngOnInit(): void {
    this.userfourthMod = this.localCache.getCurrentUser().fourth_mod;
  }

}
