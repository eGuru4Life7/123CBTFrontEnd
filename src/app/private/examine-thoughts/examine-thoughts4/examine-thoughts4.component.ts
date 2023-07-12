import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-examine-thoughts4',
  templateUrl: './examine-thoughts4.component.html',
  styleUrls: ['./examine-thoughts4.component.scss']
})
export class ExamineThoughts4Component implements OnInit {
  emotion: any = null;
  emotions: any = ['Anger',
    'Disgust',
    'Fear',
    'Happiness',
    'Sadness',
    'Surprise',
    'Anxiety',
    'Stress'];
   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({code:'E_T',completed:40,nextCode:'C_T' });
   }

  ngOnInit(): void {
  }

  addEmotion() {
    if (this.emotion) {
      this.emotions.push(this.emotion);
      this.emotion = null;
    }
  }

}
