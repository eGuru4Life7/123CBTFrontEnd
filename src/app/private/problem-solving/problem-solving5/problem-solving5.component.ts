import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-problem-solving5',
  templateUrl: './problem-solving5.component.html',
  styleUrls: ['./problem-solving5.component.scss']
})
export class ProblemSolving5Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'P_S', completed: 55, nextCode: 'B_A' });
   }

  ngOnInit(): void {
  }
  html: any;
  @ViewChild('textToSpeech') public textToSpeech: ElementRef;
  isShow: boolean = false;


  ngAfterViewInit() {
      setTimeout(() => {
        this.html = this.textToSpeech.nativeElement.innerHTML;
        this.isShow= true;
      }, 1500)
  
    }
}
