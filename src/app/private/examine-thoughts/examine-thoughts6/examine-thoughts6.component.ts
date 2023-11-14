import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { SpeechServiceService } from 'src/app/services/speech-service.service';

@Component({
  selector: 'app-examine-thoughts6',
  templateUrl: './examine-thoughts6.component.html',
  styleUrls: ['./examine-thoughts6.component.scss']
})
export class ExamineThoughts6Component implements OnInit {

  fadeIns: any;
  text: any = "";
  prevText: any = "";
  base64: any = "";
  isPlay: boolean = false;
  constructor(private el: ElementRef,private localService:LocalCacheService,private router:Router, private speechService: SpeechServiceService) { 
    this.localService.updateModuleStatus({code:'E_T',completed:60,nextCode:'C_T' });
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

  next(){
    this.router.navigateByUrl('../examinethoughts/examine7');
  }

  
  ngAfterViewInit() {
    setTimeout(async () => {
      // 
      this.isPlay = true;
    }, 1500)
  }

  playAudio(html: any) {

    if (this.prevText.innerHTML == html.innerHTML) {
      this.speechService.playAudio(this.text);
      return;
    }
    this.speechService.getBase64Text(html.innerHTML).subscribe((resp: any) => {
      if (resp.success) {
        this.text = "";
        this.prevText = html;
        resp.data.forEach((d: any) => {
          this.text += d.base64;
          this.speechService.playAudio(this.text);
        })

      }
    });

  }
}
