import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { ModuleService } from 'src/app/services/module.service';
import { SpeechServiceService } from '../../../services/speech-service.service';

@Component({
  selector: 'app-alternative',
  templateUrl: './alternative.component.html',
  styleUrls: ['./alternative.component.scss']
})
export class AlternativeComponent implements OnInit {
  thoughts: any;
  alternative:any= {};
  user:any = {};
  text: any = "";
  prevText: any = "";
  base64: any = "";
  isPlay: boolean = false;
  constructor(private moduleService:ModuleService,private localService:LocalCacheService,private messageService:MessageService, private speechService: SpeechServiceService) { 
   this.localService.updateModuleStatus({ code: 'B_T', completed: 90, nextCode: 'P_S' });
  }

  ngOnInit(): void {
    this.thoughts=localStorage.getItem('t_E');
  }

  updateAlternativeThought(){
    if(!this.alternative.healthy_thoughts){
      this.messageService.add({ severity: 'warn', summary: 'Thoughts', detail: "please write some thoughts." }); 
      return;
    }
    this.alternative.uid =this.localService.getCurrentUser().id; 
    this.moduleService.updateAlternativeThought(this.alternative).subscribe((res:any)=>{
      if(res.success){
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      }else{
        this.messageService.add({ severity: 'error', summary: '', detail: res.message });
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
