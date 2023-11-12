import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-problem-solving1',
  templateUrl: './problem-solving1.component.html',
  styleUrls: ['./problem-solving1.component.scss']
})
export class ProblemSolving1Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'P_S', completed: 20, nextCode: 'B_A' });
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
