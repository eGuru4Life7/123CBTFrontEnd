import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { ModuleService } from 'src/app/services/module.service';
import { SpeechServiceService } from '../../../services/speech-service.service';

@Component({
  selector: 'app-staywell3',
  templateUrl: './staywell3.component.html',
  styleUrls: ['./staywell3.component.scss'],
  providers: [MessageService]
})
export class Staywell3Component implements OnInit {
  user: any = {};
  mail: any = "";
  text: any = "";
  prevText: any = "";
  base64: any = "";
  isPlay: boolean = false;
  constructor(private localService: LocalCacheService, private moduleService: ModuleService, private messageService: MessageService, private route: Router, private speechService: SpeechServiceService) {
    this.localService.updateModuleStatus({ code: 'S_W', completed: 75, nextCode: '' });
  }

  ngOnInit(): void {
  }

  sendMail() {
    this.user.subject = "What did you learn from these stories?";
    this.user.body = this.mail;
    this.user.to = this.localService.getCurrentUser().email;
    this.moduleService.sendStayingWellEmail(this.user).subscribe((res: any) => {
      if (res) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
        setTimeout(() => {
          this.route.navigate(['./stayingwell/staywell4']);
        }, 1000);

      }
    });

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
