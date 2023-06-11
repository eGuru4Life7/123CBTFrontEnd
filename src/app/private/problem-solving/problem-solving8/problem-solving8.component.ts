import { Component, OnInit } from '@angular/core';
import { LocalCacheService } from 'src/app/services/local-cache.service';

@Component({
  selector: 'app-problem-solving8',
  templateUrl: './problem-solving8.component.html',
  styleUrls: ['./problem-solving8.component.scss']
})
export class ProblemSolving8Component implements OnInit {

  userfifthMod:any;
  constructor(private localCache:LocalCacheService) { }

  ngOnInit(): void {
    this.userfifthMod = this.localCache.getCurrentUser().fifth_mod;
  }


}
