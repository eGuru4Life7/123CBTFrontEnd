import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LocalCacheService } from 'src/app/services/local-cache.service';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss']
})
export class EndComponent implements OnInit {

  userfifthMod: any;
  constructor(private localService: LocalCacheService) {
    this.localService.updateModuleStatus({ code: 'B_T', completed: 100, nextCode: 'P_S' });
  }

  ngOnInit(): void {
    this.userfifthMod = this.localService.getCurrentUser().fifth_mod;
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
}
