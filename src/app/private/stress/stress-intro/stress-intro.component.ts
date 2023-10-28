import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-stress-intro',
  templateUrl: './stress-intro.component.html',
  styleUrls: ['./stress-intro.component.scss']
})
export class StressIntroComponent implements OnInit {
  html: any;
  @ViewChild('textToSpeech') public textToSpeech: ElementRef;
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.html = this.textToSpeech.nativeElement.innerHTML;
      console.log(this.html);
    }, 1500)

  }
}
