import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { SpeechServiceService } from '../../../services/speech-service.service';

@Component({
  selector: 'app-evidence',
  templateUrl: './evidence.component.html',
  styleUrls: ['./evidence.component.scss']
})
export class EvidenceComponent implements OnInit {
  isShowModal: boolean = false;
  evidence: any = {for:null,against:null};
  for: any = [];
  against: any = [];
  thoughts: any;
  text: any = "";
  prevText: any = "";
  base64: any = "";
  isPlay: boolean = false;
  constructor(private route:ActivatedRoute,private localService:LocalCacheService,private router:Router,private speechService: SpeechServiceService) { 
    this.localService.updateModuleStatus({ code: 'C_T', completed: 85, nextCode: 'B_T' });
   }

  ngOnInit(): void {
    this.thoughts = localStorage.getItem('Ct_E');
  }
  showModal() {
    if (this.evidence.for) {
      this.for = this.evidence.for.split(/\r?\n/).filter((s:any)=>s != '');
    }
    if (this.evidence.against) {
      this.against = this.evidence.against.split(/\r?\n/).filter((s:any)=>s != '');
    }
    this.isShowModal = !this.isShowModal;
  }
  closeModal() {
    this.isShowModal = false;
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
