import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { TextToSpeechComponent } from 'src/app/shared/text-to-speech/text-to-speech.component';
declare var talkify: any;
@Component({
  selector: 'app-intro-to-danger-center',
  templateUrl: './intro-to-danger-center.component.html',
  styleUrls: ['./intro-to-danger-center.component.scss']
})
export class IntroToDangerCenterComponent implements OnInit {

  html: any;
  @ViewChild('textToSpeech') public textToSpeech: ElementRef;
  isShow: boolean = false;

  constructor(private localService: LocalCacheService, private router: Router) {
    this.localService.updateModuleStatus({ code: 'S', completed: 100, nextCode: 'D_C' });
  }


  ngOnInit(): void {
  }


  ngAfterViewInit() {

    setTimeout(() => {
      this.html = this.textToSpeech.nativeElement.innerHTML;
      this.isShow = true;
      
    }, 1200)

  }

}
