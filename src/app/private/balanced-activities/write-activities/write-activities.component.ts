import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { SpeechServiceService } from '../../../services/speech-service.service';


@Component({
  selector: 'app-write-activities',
  templateUrl: './write-activities.component.html',
  styleUrls: ['./write-activities.component.scss'],
  
})
export class WriteActivitiesComponent implements OnInit {
  

  text: any = "";
  prevText: any = "";
  base64: any = "";
  isPlay: boolean = false;
  
  activitiesForm!: FormGroup;
  isSmallScreen: boolean=false; 
  
  constructor(private fb: FormBuilder,private localService:LocalCacheService,private router:Router,private speechService: SpeechServiceService) { 
    this.localService.updateModuleStatus( { code: 'B_A', completed: 50, nextCode: 'R' });
    this.activitiesForm = this.fb.group({
      mondayText: '',
      tuesdayText: '',
      wednesdayText: '',
      thursdayText: '',
      fridayText: '',
      saturdayText: '',
      sundayText: ''
    });
  }



  ngOnInit(): void {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  checkScreenSize(): void {
    this.isSmallScreen = window.innerWidth <= 768; // Adjust the breakpoint as per your needs
  }
  
  limitLines(event: Event, maxLines: number) {
    const textarea = event.target as HTMLTextAreaElement;
    const lines = textarea.value.replace(/\r/g, '').split('\n');
    if (lines.length > maxLines) {
      textarea.value = lines.slice(0, maxLines).join('\n');
    }
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
