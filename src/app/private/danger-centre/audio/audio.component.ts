import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({code:'D_C',nextCode:'E_T',completed:40});
   }
   html: any;
   @ViewChild('textToSpeech') public textToSpeech: ElementRef;
   isShow: boolean = false;
 
 
   ngAfterViewInit() {
     setTimeout(() => {
       this.html = this.textToSpeech.nativeElement.innerHTML;
       this.isShow = true;
     }, 1200)
 
   }
  ngOnInit(): void {
  }

}
