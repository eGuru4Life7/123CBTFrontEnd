import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  addEmotion() {
    if (this.emotion) {
      this.emotions.push(this.emotion);
      this.emotion = null;
    }
  }

}
