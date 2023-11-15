import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { SpeechServiceService } from 'src/app/services/speech-service.service';
@Component({
  selector: 'app-activitylist-recreational',
  templateUrl: './activitylist-recreational.component.html',
  styleUrls: ['./activitylist-recreational.component.scss']
})
export class ActivitylistRecreationalComponent implements OnInit {
  text: any = "";
  prevText: any = "";
  base64: any = "";
  isPlay: boolean = false;

   constructor(private localService:LocalCacheService,private router:Router,private speechService: SpeechServiceService) { 
    this.localService.updateModuleStatus( { code: 'B_A', completed: 75, nextCode: 'R' });
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
