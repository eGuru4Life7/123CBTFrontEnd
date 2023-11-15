import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { ModuleService } from 'src/app/services/module.service';
import { SpeechServiceService } from '../../../services/speech-service.service';

@Component({
  selector: 'app-examine-thoughts8',
  templateUrl: './examine-thoughts8.component.html',
  styleUrls: ['./examine-thoughts8.component.scss']
})
export class ExamineThoughts8Component implements OnInit {
  currentUser: any;
  dairy:any ={};
  text: any = "";
  prevText: any = "";
  base64: any = "";
  isPlay: boolean = false;
  constructor(private moduleService: ModuleService,private localService:LocalCacheService,private router:Router,private speechService: SpeechServiceService) { 
    this.localService.updateModuleStatus({code:'E_T',completed:80,nextCode:'C_T' });
   }
  ngOnInit(): void {
    this.currentUser = this.localService.getCurrentUser();
    this.getThoughtDiaryById();
  }
  
  async getThoughtDiaryById() {
    await this.moduleService.getThoughtDiaryById(this.currentUser.id).toPromise().then((res: any) => {
      if (res.success) {
        this.dairy = res.data[0];
      }
    })
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
