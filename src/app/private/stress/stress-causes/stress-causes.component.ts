import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { SpeechServiceService } from 'src/app/services/speech-service.service';

@Component({
  selector: 'app-stress-causes',
  templateUrl: './stress-causes.component.html',
  styleUrls: ['./stress-causes.component.scss']
})
export class StressCausesComponent implements OnInit {
  @ViewChild('textToSpeech') public textToSpeech: ElementRef;
  text: any = "";
  isPlay: boolean = false;
  constructor(private localService: LocalCacheService, private router: Router, private speechService: SpeechServiceService) {
    this.localService.updateModuleStatus({ code: 'S', completed: 36, nextCode: 'D_C' });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(async () => {
      this.speechService.getBase64Text(this.textToSpeech.nativeElement.innerHTML).subscribe((resp: any) => {
        if (resp.success) {
          resp.data.forEach((d: any) => {
            this.text += d.base64;
          })
          this.isPlay= true;
        }
      });
    }, 1500)
  }

  playAudio() {
    console.log(this.text)
    this.speechService.playAudio(this.text);
  }



}
