import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';

@Component({
  selector: 'app-khushi-muhammad',
  templateUrl: './khushi-muhammad.component.html',
  styleUrls: ['./khushi-muhammad.component.scss']
})
export class KhushiMuhammadComponent implements OnInit {
  html: any;
  @ViewChild('textToSpeech') public textToSpeech: ElementRef;
  isShow: boolean = false;
  
  constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code:'S',completed:52,nextCode:'D_C'});
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
