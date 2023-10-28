import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-examine-thoughts1',
  templateUrl: './examine-thoughts1.component.html',
  styleUrls: ['./examine-thoughts1.component.scss']
})
export class ExamineThoughts1Component implements OnInit {
  html: any;
  @ViewChild('textToSpeech') public textToSpeech: ElementRef;

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({code:'E_T',completed:20,nextCode:'C_T' });
   }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.html = this.textToSpeech.nativeElement.innerHTML;
      console.log(this.html);
    }, 1500)

  }

}
