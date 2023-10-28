import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';

@Component({
  selector: 'app-intro-to-danger-center',
  templateUrl: './intro-to-danger-center.component.html',
  styleUrls: ['./intro-to-danger-center.component.scss']
})
export class IntroToDangerCenterComponent implements OnInit {

  html: any;
  @ViewChild('textToSpeech') public textToSpeech: ElementRef;
  
  constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code:'S',completed:100,nextCode:'D_C'});
   }


  ngOnInit(): void {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.html = this.textToSpeech.nativeElement.innerHTML;
      console.log(this.html);
    }, 1200)

  }
}
