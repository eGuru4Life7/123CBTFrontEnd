import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-examine-thoughts3',
  templateUrl: './examine-thoughts3.component.html',
  styleUrls: ['./examine-thoughts3.component.scss']
})
export class ExamineThoughts3Component implements OnInit {

  constructor(private localService: LocalCacheService, private router: Router) {
    this.localService.updateModuleStatus({ code: 'E_T', completed: 30, nextCode: 'C_T' });
  }

  html: any;
  @ViewChild('textToSpeech') public textToSpeech: ElementRef;
  isShow: boolean = false;


  ngAfterViewInit() {
    setTimeout(() => {
      this.html = this.textToSpeech.nativeElement.innerHTML;
      this.isShow = true;
    }, 1500)

  }
  ngOnInit(): void {
  }

}
