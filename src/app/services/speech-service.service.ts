import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserServiceService } from '../services/user-service.service';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class SpeechServiceService {
  snd: any;
  constructor(private translate: TranslateService, private userService: UserServiceService) {
  }



  getBase64Text(html: any): Observable<any> {
    let Languages = [
      { lang: 'en', voice: 'Google US English', selectedLang: 'en' },
      { lang: 'en', voice: 'Google español', selectedLang: 'spa' },
      { lang: 'zh', voice: 'Google 普通话（中国大陆）', selectedLang: 'ch' },
      { lang: 'hi', voice: 'Google हिन्दी', selectedLang: 'hindi' },
      { lang: 'hi', voice: 'Google हिन्दी', selectedLang: 'gm' },
      { lang: 'ur', voice: 'Google हिन्दी', selectedLang: 'ur' },
      { lang: 'ar', voice: 'Google US English', selectedLang: 'ar' }
    ];
    let currentlang = this.translate.currentLang;
    let selectedlang: any = {};
    selectedlang = Languages.filter(d => d.selectedLang == currentlang)[0];
    let text = "";
    var temporalDivElement = document.createElement("div");
    temporalDivElement.innerHTML = html;
    let result = temporalDivElement.textContent || temporalDivElement.innerText || "";
    return this.userService.getAudio({ lang: selectedlang.lang, text: result });
  }

  playAudio(base64: any) {
    if (this.snd) {
      this.snd.pause();
      this.snd.currentTime = 0;
    }
    this.snd = new Audio("data:audio/ogg;base64," + base64);
    this.snd.play();
  }

}


