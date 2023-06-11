import { Component, OnInit } from '@angular/core';
import { LocalCacheService } from 'src/app/services/local-cache.service';

@Component({
  selector: 'app-examine-thoughts10',
  templateUrl: './examine-thoughts10.component.html',
  styleUrls: ['./examine-thoughts10.component.scss']
})
export class ExamineThoughts10Component implements OnInit {

  userThirdMod:any;
  constructor(private localCache:LocalCacheService) { }

  ngOnInit(): void {
    this.userThirdMod = this.localCache.getCurrentUser().third_mod;
  }


}
