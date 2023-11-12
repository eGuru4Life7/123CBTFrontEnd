import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-danger-center1',
  templateUrl: './danger-center1.component.html',
  styleUrls: ['./danger-center1.component.scss']
})
export class DangerCenter1Component implements OnInit {
  html: any;
  @ViewChild('textToSpeech') public textToSpeech: ElementRef;
  isShow: boolean = false;

  constructor(private localService: LocalCacheService, private router: Router) {
    this.localService.updateModuleStatus({ code: 'D_C', nextCode: 'E_T', completed: 30 });
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    setTimeout(() => {
          this.html = this.textToSpeech.nativeElement.innerHTML;
      
      this.isShow = true;
    }, 1200)

  }
}
