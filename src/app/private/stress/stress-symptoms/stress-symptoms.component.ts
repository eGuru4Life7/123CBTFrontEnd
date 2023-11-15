import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { SpeechServiceService } from '../../../services/speech-service.service';

@Component({
  selector: 'app-stress-symptoms',
  templateUrl: './stress-symptoms.component.html',
  styleUrls: ['./stress-symptoms.component.scss']
})
export class StressSymptomsComponent implements OnInit {
  text: any = "";
  prevText: any = "";
  base64: any = "";
  isPlay: boolean = false;
  constructor(private localService: LocalCacheService, private router: Router, private speechService: SpeechServiceService) {
    this.localService.updateModuleStatus({ code:'S',completed:52,nextCode:'D_C'});
   }

  ngOnInit(): void {
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
