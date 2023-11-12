import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TextToSpeechComponent } from 'src/app/shared/text-to-speech/text-to-speech.component';


@Component({
  selector: 'app-stress-intro',
  templateUrl: './stress-intro.component.html',
  styleUrls: ['./stress-intro.component.scss']
})
export class StressIntroComponent implements OnInit {
  html: any;
  @ViewChild('textToSpeech') public textToSpeech: ElementRef;
  isShow: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.html = this.textToSpeech.nativeElement.innerHTML;
      
      this.isShow = true;
    }, 1500)

  }
}
