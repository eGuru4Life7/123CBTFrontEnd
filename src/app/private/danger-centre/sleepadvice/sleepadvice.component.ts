import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { LocalCacheService } from 'src/app/services/local-cache.service';

@Component({
  selector: 'app-sleepadvice',
  templateUrl: './sleepadvice.component.html',
  styleUrls: ['./sleepadvice.component.scss']
})
export class SleepadviceComponent implements OnInit {

  fadeIns: any;

  constructor(private el: ElementRef,private localService:LocalCacheService) { 
    this.localService.updateModuleStatus({  code: 'D_C', completed: 80, nextCode: 'E_T'  });
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
  html: any;
  @ViewChild('textToSpeech') public textToSpeech: ElementRef;
  isShow: boolean = false;


  ngAfterViewInit() {
    setTimeout(() => {
      this.html = this.textToSpeech.nativeElement.innerHTML;
      this.isShow = true;
    }, 1200)

  }
}
