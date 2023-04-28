import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-diary-week3',
  templateUrl: './diary-week3.component.html',
  styleUrls: ['./diary-week3.component.scss']
})
export class DiaryWeek3Component implements OnInit {

  fadeIns: any;

  constructor(private el: ElementRef) { }

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
