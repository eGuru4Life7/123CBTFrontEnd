import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';

@Component({
  selector: 'app-diary-week2',
  templateUrl: './diary-week2.component.html',
  styleUrls: ['./diary-week2.component.scss']
})
export class DiaryWeek2Component implements OnInit {

  fadeIns: any;

  constructor(private el: ElementRef,private localService:LocalCacheService,private router:Router) { 
  this.localService.updateModuleStatus({ code: 'C_T', completed: 50, nextCode: 'B_T' });
 }

  ngOnInit(): void {
    this.fadeIns = this.el.nativeElement.querySelectorAll('.fade-in-l');
    this.applyFadeIn();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.applyFadeIn();
  }

  applyFadeIn() {
    this.fadeIns.forEach((fadeEl: any) => {
      const rect = fadeEl.getBoundingClientRect();
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      if (rect.top >= 0 && rect.top <= viewHeight) {
        fadeEl.classList.add('fade-in');
      }
    });
  }

}
